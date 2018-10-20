import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
    declarations: [AdminComponent]
})
export class AdminModule { }
