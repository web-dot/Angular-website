import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { UsersmoduleRoutingModule } from './usersmodule-routing.module';
import { UsersComponent } from './users/users.component';
import { MatTable } from '@angular/material/table';
import { MaterialExampleModule } from '../material-module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersmoduleRoutingModule,
    MatTableModule
  ],
  exports:[
    MatTableModule,
    MatTable,
    MaterialExampleModule
  ]
})
export class UsersmoduleModule { }
