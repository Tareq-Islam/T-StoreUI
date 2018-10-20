import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainUiComponent } from './main-ui.component';
import { MainUiRouting } from './main-ui-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainUiRouting
  ],
  declarations: [MainUiComponent]
})
export class MainUiModule { }
