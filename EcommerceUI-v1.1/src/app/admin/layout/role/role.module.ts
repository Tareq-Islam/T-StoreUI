import { ReactiveFormsModule } from '@angular/forms';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleRoutingModule } from './role-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RoleComponent, RoleListComponent, RoleCreateComponent]
})
export class RoleModule { }
