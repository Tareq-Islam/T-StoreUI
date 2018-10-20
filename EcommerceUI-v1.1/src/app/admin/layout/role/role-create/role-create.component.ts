import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  rngForm: FormGroup;
  constructor(private _role: DataServiceService, private _router: Router, private fb: FormBuilder) {this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this.rngForm = this.fb.group({
       name: ['', Validators.required ]
    });
  }
  onCreate() {

      this._role.onRoleCreate(this.rngForm.value)
          .subscribe(
            res => console.log(res),
            err => console.log(err)
          );
      this._router.navigate(['/admin/layout/role']);

  }

}
