import { MainUiComponent } from './main-ui.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: MainUiComponent,
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'prefix' },
            { path: 'helper', loadChildren: './ui-helper/ui-helper.module#UiHelperModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], /*Because app-routing use forRoot Route so */
    exports: [RouterModule]
})
export class MainUiRouting {}
