import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  constructor(private _role: DataServiceService, private _router: Router, private _auth: AuthService) { }
  roleData: any = [];
  ngOnInit() {
    this._role.onRoleData()
    .subscribe(
      res => this.roleData = res,
      err => {
        // this._auth.logoutUser();
        console.log(err);
        // this._router.navigate(['/admin/login']);
      }
    );
  }
  onDelete(item) {
    this._role.onRoleDelete(item.id)
    .subscribe(
      res => {
        console.log(res),
        this._router.navigate(['/admin/layout/role']);

      },
      err => console.log(err)
    );

  }
}
