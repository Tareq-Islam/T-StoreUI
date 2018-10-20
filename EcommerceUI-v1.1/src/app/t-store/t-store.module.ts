import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TStoreComponent } from './t-store.component';
import { TStoreUiRouting } from './t-store.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TStoreUiRouting
  ],
  declarations: [TStoreComponent]
})
export class TStoreModule { }
