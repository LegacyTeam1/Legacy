import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    HousesComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    IvyCarouselModule
  ]
})
export class HousesModule { }
