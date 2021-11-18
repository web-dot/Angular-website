import { LoginFormComponent } from './forms/login-form/login-form.component';
import { PlayersComponent } from './players/players.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BugreportComponent } from './bugreport/bugreport.component';
import { HomeComponent } from './home/home.component';
// import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'bug', component: BugreportComponent},
  {
    path: 'forms',
    loadChildren: () => import('src/app/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'players',
    component: PlayersComponent
  }
]; //configures routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
