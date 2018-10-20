import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';




@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService,
        private _router: Router) {}

    canActivate() {
        if (this._authService.loggedIn()) {
            console.log('true');
            return true;
          } else {
            console.log('false');
            this._router.navigate(['/admin/login']);
            return false;
          }
    }
}
