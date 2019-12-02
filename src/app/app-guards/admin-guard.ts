import {CanActivate} from '@angular/router';
import {UserService} from '../app-services/user.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private readonly userService: UserService) {}

    canActivate() {
        return this.userService.isLoggedIn();
    }
}
