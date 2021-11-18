
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() user?: any = {};

  role: string = '';

  isLogin: boolean = true;

  constructor(private router: Router) {



    }

  ngOnInit(): void {
    let rawuser = localStorage.getItem('currentuser');
    if(rawuser != null){
      this.user = JSON.parse(rawuser);
      console.log(this.user[0]["email"]);
      if(this.user[0]["email"] == 'admin@gmail.com'){
        this.role = "admin"
      }
      else{
        this.role = " user "
      }
    }
  }

}

export interface User{
  email : '';
  password : '';
}
