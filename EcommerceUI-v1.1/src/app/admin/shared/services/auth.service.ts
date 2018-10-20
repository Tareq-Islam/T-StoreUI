import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
private _loginUrl = 'https://localhost:44310/api/Account/login';
constructor(private http: HttpClient, private _router: Router) { }
  onLoggedin(user) {
      return this.http.post<any>(this._loginUrl, user);
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/admin/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }



}
