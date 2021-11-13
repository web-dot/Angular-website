import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

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
    console.log(localStorage.getItem('usersDB'));
    let rawusers = localStorage.getItem('usersDB');

    if(rawusers == null){
      console.log("kindly register to login")
    }
    else{
      let users = JSON.parse(rawusers);
      console.log(users);
      let flag: boolean = false;
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
