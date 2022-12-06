import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-new-contact-dialog',
    templateUrl: './new-contact-dialog.component.html',
    styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

    public avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
    public user: User;
    public name = new FormControl('', [Validators.required]);

    constructor(
        private dialogRef: MatDialogRef<NewContactDialogComponent>,
        private userService: UserService,
    ) { }

    public ngOnInit(): void {
        this.user = new User();
    }

    public save() {
        if (this.name.value) {
            this.user.name = this.name.value;
        } else {
            return;
        }

        this.userService.addUser(this.user).then(user => {
            this.dialogRef.close(user);
        });
    }

    public dismiss() {
        this.dialogRef.close(null);
    }

    public getErrorMessage() {
        return this.name.hasError('required') ? 'You must enter a name' : '';
    }
}
