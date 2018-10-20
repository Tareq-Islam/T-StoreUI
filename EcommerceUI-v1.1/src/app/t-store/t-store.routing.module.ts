import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TStoreComponent } from './t-store.component';

const routes: Routes = [
    {
        path: '',
        component: TStoreComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], /*Because app-routing use forRoot Route so */
    exports: [RouterModule]
})
export class TStoreUiRouting {}
