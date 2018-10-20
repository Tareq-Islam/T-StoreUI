import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {

  constructor(private _user: DataServiceService, private _router: Router, private _auth: AuthService) { }
  userData: any = [];
  ngOnInit() {
    this._user.onUserData()
    .subscribe(
      res => this.userData = res,
      err => {
        this._auth.logoutUser();
        console.log(err);
        this._router.navigate(['/admin/login']);
      }
    );
  }
  onDelete(item) {
    this._user.onUserDelete(item.id)
    .subscribe(
      res => {
        console.log(res),
        this._router.navigate(['/admin/layout/user']);

      },
      err => console.log(err)
    );

  }
}
