import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

    user: User | null;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        ) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const param = params['id'];
            this.user = null;
            if (param !== undefined) {
                const id: number = parseInt(param);

                this.userService.users.subscribe(users => {
                    if (users.length === 0) return;

                    setTimeout(() => {
                        this.user = this.userService.userById(id) ?? null;
                    }, 500);
                });
            }
        });
    }
}
