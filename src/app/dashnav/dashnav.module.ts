import { Router } from '@angular/router';
import { DashnavComponent } from './dashnav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashnavRoutingModule } from './dashnav-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashnavComponent
  ],
  imports: [
    CommonModule,
    DashnavRoutingModule,
    RouterModule
  ],
  exports:[
    DashnavComponent
  ]
})
export class DashnavModule { }
