import { Component, NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginFormComponent } from './forms/login-form/login-form.component'
import { RegFormComponent } from './forms/reg-form/reg-form.component';
import { HomeComponent } from './home/home.component';
// import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Route[] = [
  {path: 'forms/login', component: LoginFormComponent},
  {path: 'forms/login/signup', component: RegFormComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {
    path: 'forms',
    loadChildren: () => import('src/app/forms/forms-routing.module').then(m => m.FormsRoutingModule)
  }
]; //configures routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
