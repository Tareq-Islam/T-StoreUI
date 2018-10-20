import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  roles: any[];

  ungForm: FormGroup;
  constructor(private _user: DataServiceService, private _router: Router, private fb: FormBuilder) {this.createForm(); }

  ngOnInit() {
    this._user.onRoleData()
        .subscribe(
          res => this.roles = res,
          err => console.log(err)
        );
  }
  createForm() {
    this.ungForm = this.fb.group({
       firstName: ['', Validators.required ],
       lastName: ['', Validators.required ],
       email: ['', Validators.required],
       phoneNumber: [''],
       roles: [''],
       password: ['', Validators.required ],
       confirmPassword: ['', Validators.required]
    });
  }
  onCreate() {

      this._user.onUserCreate(this.ungForm.value)
          .subscribe(
            res => console.log(res),
            err => console.log(err)
          );
      this._router.navigate(['/admin/layout/user']);

  }

}
