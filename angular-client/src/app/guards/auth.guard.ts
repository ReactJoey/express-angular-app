// This guard file is for making sure that if someone isn't logged in, that they cannot access the dashboard or profile by typing in their url's. J. A.
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
        ) {
            canActivate() {
                if (this.authService.loggedIn()) {
                    return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            };
    };
}};