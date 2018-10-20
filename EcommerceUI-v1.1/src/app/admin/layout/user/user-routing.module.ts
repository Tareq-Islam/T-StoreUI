import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'prefix' },
            { path: 'list', component: UserListViewComponent },
            { path: 'create', component: UserCreateComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
