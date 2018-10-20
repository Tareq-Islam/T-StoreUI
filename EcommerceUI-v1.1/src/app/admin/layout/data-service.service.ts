import { UserModel } from './user/userModel';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';



@Injectable()
export class DataServiceService {

  private _userdataUrl = 'https://localhost:44310/api/User';
  private _roledataUrl = 'https://localhost:44310/api/Role';

  constructor(private http: HttpClient, private _token: AuthService) { }
  token = this._token.getToken();
  headers: HttpHeaders = new HttpHeaders({'Authorization' : 'Bearer ' + this.token });
// user
  onUserData() {
    return this.http.get<any>(this._userdataUrl, {headers: this.headers});
  }

  onUserCreate(user) {
    return this.http.post<any>(this._userdataUrl, user, {headers:  this.headers});
  }
  onUserDelete(id) {
    return this.http.delete<any>(this._userdataUrl + '/' + id, {headers:  this.headers});
  }
// role
  onRoleData() {
    return this.http.get<any>(this._roledataUrl, {headers: this.headers});
  }

  onRoleCreate(role) {
    return this.http.post(this._roledataUrl, role, {headers:  this.headers});
  }
  onRoleDelete(id) {
    return this.http.delete<any>(this._roledataUrl + '/' + id, {headers:  this.headers});
  }
}
