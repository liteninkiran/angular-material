import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

    @Output() toggleSidenav = new EventEmitter<void>();

    constructor(
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private router: Router,
    ) { }

    public ngOnInit(): void {
    }

    public openAddContactDialog(): void {
        let dialogRef = this.dialog.open(NewContactDialogComponent, {
            width: '450px',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.openSnackBar('Contact Added', 'View')
                    .onAction().subscribe(() => {
                    this.router.navigate(['/contact-manager', result.id]);
                });
            }
        })
    }

    public openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
        return this.snackBar.open(message, action, {
            duration: 5000,
        });
    }
}
