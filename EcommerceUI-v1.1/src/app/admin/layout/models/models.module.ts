import { ModelRoutingModule } from './model-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsComponent } from './models.component';

@NgModule({
  imports: [
    CommonModule,
    ModelRoutingModule
  ],
  declarations: [ModelsComponent]
})
export class ModelsModule { }
