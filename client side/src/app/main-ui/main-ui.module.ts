import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainUIRoutingModule } from './main-ui-routing.module';
import { MainUIComponent } from './main-ui.component';


@NgModule({
  declarations: [
    MainUIComponent
  ],
  imports: [
    CommonModule,
    MainUIRoutingModule
  ]
})
export class MainUIModule { }
