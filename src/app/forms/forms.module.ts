import { ToolbarmoduleModule } from './../toolbarmodule/toolbarmodule.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';
import { MaterialExampleModule } from '../material-module';
import { ForgPassComponent } from './forg-pass/forg-pass.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegFormComponent,
    FormsComponent,
    ForgPassComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    ToolbarmoduleModule
  ]
})
export class FormsModule { }
