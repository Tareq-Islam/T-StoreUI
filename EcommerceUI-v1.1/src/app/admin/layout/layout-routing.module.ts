import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'role', loadChildren: './role/role.module#RoleModule' },
            { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
            { path: 'product', loadChildren: './products/products.module#ProductsModule' },
            { path: 'category', loadChildren: './categories/categories.module#CategoriesModule' },
            { path: 'order', loadChildren: './orders/orders.module#OrdersModule' },
            { path: 'model', loadChildren: './models/models.module#ModelsModule' },
            { path: 'brand', loadChildren: './brands/brands.module#BrandsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], /*Because app-routing use forRoot Route so */
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
