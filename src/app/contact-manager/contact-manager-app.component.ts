import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-manager-app',
    template: `
        <app-sidenav>

        </app-sidenav>
    `,
    styles: [],
})
export class ContactManagerAppComponent implements OnInit {

    constructor(iconRegistry: MatIconRegistry, sanitiser: DomSanitizer) {
        iconRegistry.addSvgIconSet(sanitiser.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
    }

    ngOnInit(): void {
    }
}
