import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserComponent, UserListViewComponent, UserCreateComponent, UserDetailsComponent]
})
export class UserModule { }
