import { Component, NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {
    path: 'forms',
    loadChildren: () => import('src/app/forms/forms.module').then(m => m.FormsModule)
  }
]; //configures routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
