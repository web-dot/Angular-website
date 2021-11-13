import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ForgPassComponent } from './forg-pass/forg-pass.component';
import { FormsComponent } from './forms.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';

const routes: Route[] = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'signup', component: RegFormComponent },
      { path: 'fpass', component: ForgPassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
