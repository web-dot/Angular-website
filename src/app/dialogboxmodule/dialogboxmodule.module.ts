import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogboxmoduleRoutingModule } from './dialogboxmodule-routing.module';
import { DialogBoxComponent } from './dialogbox/dialogbox.component';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DialogBoxComponent,
  ],
  imports: [
    CommonModule,
    DialogboxmoduleRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgModel,
    RouterModule
  ],
  exports:[
    DialogBoxComponent
  ]
})
export class DialogboxmoduleModule { }
