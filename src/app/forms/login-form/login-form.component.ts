import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})




export class LoginFormComponent implements OnInit {

loginAudit: UserLogin[] =[];

loginForm = new FormGroup({
  email : new FormControl(''),
  pass : new FormControl('')
});  

  constructor() { }

  ngOnInit(): void {

  }



  submit(){
    let login: any;
    login = this.loginForm.value;
    login.time = new Date();
    
    console.log(login);
    console.log(localStorage.getItem('usersDB'));
    let rawusers = localStorage.getItem('usersDB');

    if(rawusers == null){
      console.log("kindly register to login")
    }
    else{
      let users = JSON.parse(rawusers);
      console.log(users);
      let flag: boolean = false;
      for(let user of users){
        console.log(user);
        if(user["email"] === login["email"] && user["pass"] === login["pass"]){
          alert('login successfull');
        }
        if(user["email"] === login["email"]){
          flag = true;
          if(user["pass"] != login["pass"]){
            flag = false;
          }
        }
      }
      if(flag == false){
        alert("check password");
      }

      
    }
    

    this.loginAudit.push(login);
    this.reset();

    console.log(this.loginAudit);
  }

    
  reset(){
    this.loginForm.reset();
  }
}

export interface UserLogin{
  email: string;
  password: string;
  time: Date;
}

export interface User{
  name: string;
  password: string;
}
