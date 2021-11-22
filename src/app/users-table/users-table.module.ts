import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersTableRoutingModule } from './users-table-routing.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { MatButtonModule } from '@angular/material/button';
import { DashnavModule } from './../dashnav/dashnav.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashnavComponent } from './../dashnav/dashnav.component';
import { ToolbarmoduleModule } from './../toolbarmodule/toolbarmodule.module';
import { MatTableModule } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MaterialExampleModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersTableRoutingModule,
    MatTableModule,
    FormsModule,
    ToolbarmoduleModule,
    ToolbarmoduleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    DashnavModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class UsersTableModule { }
