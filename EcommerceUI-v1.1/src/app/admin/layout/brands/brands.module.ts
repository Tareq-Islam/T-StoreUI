import { BrandRoutingModule } from './brand-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands.component';

@NgModule({
  imports: [
    CommonModule,
    BrandRoutingModule
  ],
  declarations: [BrandsComponent]
})
export class BrandsModule { }
