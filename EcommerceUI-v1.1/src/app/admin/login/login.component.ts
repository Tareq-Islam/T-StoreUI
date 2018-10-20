import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  bngForm: FormGroup;
  constructor(private _auth: AuthService, private _router: Router, private _authService: AuthService, private fb: FormBuilder) 
  { this.createForm(); }
  ngOnInit() {}

  createForm() {
    this.bngForm = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
  loginUser () {
       this._auth.onLoggedin(this.bngForm.value)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log(res);
        this._router.navigate(['/admin/layout/dashboard']);
      },
      err => console.log(err)
    );
  }
}

