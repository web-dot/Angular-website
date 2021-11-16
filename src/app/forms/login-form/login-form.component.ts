import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl} from '@angular/forms';
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
      alert("kindly sign-up to login")
    }
    else{
      let users = JSON.parse(rawusers);
      console.log(users);
      let test: boolean = false;
      for(let user of users){
        console.log(user["email"]);
        if(login["email"] === user["email"] && login["pass"] === user["pass"]){
          alert("login successful");
          test=true;
          break;
        }
        else if(login["email"] === user["email"] && login["pass"] != user["pass"]){
          alert("kindly check pass");
          test = true;
          break;
        }
      }
      if(test== false){
        alert("kindly check email")
      }
    }
    this.loginAudit.push(login);
    this.reset();
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
