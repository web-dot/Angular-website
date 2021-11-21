import { DashnavModule } from './../dashnav/dashnav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashRoutingModule } from './admindash-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdmindashRoutingModule,
    DashnavModule
  ]
})
export class AdmindashModule { }
