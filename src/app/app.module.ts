import { ToolbarmoduleModule } from './toolbarmodule/toolbarmodule.module';

import { PlayersdataService } from './services/playersdata.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './homemodule/home/home.component';
import { MaterialExampleModule } from './material-module';
import { FooterComponent } from './footer/footer.component';
import { BugreportComponent } from './bugreport/bugreport.component';

import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { JsonusersService } from './services/jsonusers.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BugreportComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToolbarmoduleModule
  ],
  providers: [
    PlayersdataService,
    JsonusersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
