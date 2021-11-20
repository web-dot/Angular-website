import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path:'',
    component: UsersComponent,
    children: [
      {path: 'users', component: UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersmoduleRoutingModule { }
