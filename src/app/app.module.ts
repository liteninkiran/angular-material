import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: 'contact-manager', loadChildren: () => import('./contact-manager/contact-manager.module').then(m => m.ContactManagerModule) },
    { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
    { path: '**', redirectTo: 'demo' },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
