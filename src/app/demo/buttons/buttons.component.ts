import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons',
    template: `
        <button mat-button>
            <mat-icon fontIcon="face"></mat-icon>
            Click Me
        </button>

        <mat-checkbox>Check Me</mat-checkbox>
    `,
    styles: [],
})
export class ButtonsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
