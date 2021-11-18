
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialExampleModule } from '../material-module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    RouterModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarmoduleModule { }
