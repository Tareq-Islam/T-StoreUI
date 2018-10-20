import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    {path: '',
    component: AdminComponent,
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'prefix' },
        { path: 'layout', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
        { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
        { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
        { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
        { path: '**', redirectTo: 'not-found' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers : [AuthGuard],
    exports: [RouterModule]
})
export class AdminRoutingModule {}

