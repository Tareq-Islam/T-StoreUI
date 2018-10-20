import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { TokenInterceptorService } from '../shared/services/token-interceptor.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
    providers: [AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }],

    declarations: [LoginComponent]
})
export class LoginModule {}
