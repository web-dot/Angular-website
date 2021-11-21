import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { UsersmoduleModule } from './usersmodule/usersmodule.module';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { PlayersComponent } from './players/players.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BugreportComponent } from './bugreport/bugreport.component';
import { HomeComponent } from './homemodule/home/home.component';

const routes: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'bug', component: BugreportComponent},
  {path: 'admin', component: AdmindashComponent},
  {path: 'user', component: UserdashComponent },

  {
    path: 'forms',
    loadChildren: () => import('src/app/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'users',
    loadChildren: () => import('src/app/usersmodule/usersmodule.module').then(m => m.UsersmoduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
