import { Component } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-website';


  ngOnInit(){
    // let loggeduser = JSON.parse(localStorage.getItem('currentuser'));
    // console.log(loggeduser);
    // loggeduser = [];
    localStorage.setItem('currentuser', JSON.stringify([]));
  }


  user:any;

}
