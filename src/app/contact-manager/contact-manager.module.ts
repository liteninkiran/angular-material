import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
        path: '',
        component: ContactManagerAppComponent,
        children: [{
            path: ':id',
            component: MainContentComponent,
        }, {
            path: '',
            component: MainContentComponent,
        }],
    }, {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    declarations: [
        ContactManagerAppComponent,
        ToolbarComponent,
        MainContentComponent,
        SidenavComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        FlexLayoutModule,
        RouterModule.forChild(routes),
        HttpClientModule,
    ],
    providers: [
        UserService,
    ],
})
export class ContactManagerModule { }