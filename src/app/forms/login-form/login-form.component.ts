import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { iif } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})




export class LoginFormComponent implements OnInit {

loginAudit: UserLogin[] =[];

loginForm = this.fb.group({
  email:['', [Validators.required, Validators.email]],
  pass: ['', Validators.pattern(/^[\w@-]{6,20}$/)]
})
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  submit(){
    let login: any;
    login = this.loginForm.value;
    login.time = new Date();
    console.log(login);
    //console.log(localStorage.getItem('usersDB'));
    let rawusers = localStorage.getItem('usersDB');

    if(rawusers == null){
      alert("kindly register to login")
    }
    else{
      let users = JSON.parse(rawusers);
      console.log(users);
      let test: boolean = false;
      for(let user of users){
        if(login["email"] === user["email"] && login["pass"] === user["pass"]){
          alert("login successful");
          test=true;
        }
        if(login["email"] != user["email"]){
          alert("kindly sign up to login");
          test = true;
        }
      }
      if(test == false){
        alert("kindly check pass");
      }
      let flag: boolean = false;
    }
    this.loginAudit.push(login);
    this.reset();
    //console.log(this.loginAudit);
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
