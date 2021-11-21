import { JsonusersService } from './../../services/jsonusers.service';
import { Component, OnInit,Input} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})



//parent
export class LoginFormComponent implements OnInit {

loginAudit: UserLogin[] =[];
login: any = [];
admin: any = {};

currentuser: any = {
  email : '',
  password : ''
}

currentusrarr: any = [];

loginForm = this.fb.group({
  email:['', [Validators.required, Validators.email]],
  pass: ['', Validators.pattern(/^[\w@-]{6,20}$/)]
})


  constructor(private fb: FormBuilder, private userService: JsonusersService, private router: Router) { }

  ngOnInit(): void {
    this.getJsonUsers();
  }

  getJsonUsers(): any{
    this.userService.getUsers().subscribe(result => {
      this.admin = result;
      console.log(this.admin);
      return result;
    })
  }

  submit(){
    let login: any;
    login = this.loginForm.value;
    login.time = new Date();
    this.loginAudit.push(login);
    this.validateUser();
    this.reset();
  }

  validateUser(){
    let login: any;
    login = this.loginForm.value;
    console.log(this.loginForm.value);
    let rawusers = localStorage.getItem('usersDB');
    if(rawusers == null){
      alert("kindly sign-up to login");
      this.router.navigateByUrl('');
    }
    else{
      let users = JSON.parse(rawusers);
      console.log(users);
      let test: boolean = false;
      for(let user of users){
        if(login["email"] === user["email"] && login["pass"] === user["pass"]){
          alert("user login successful");
          test=true;

          this.currentuser['email'] = user["email"];
          this.currentuser['password'] = user["pass"];
          this.currentusrarr.push(this.currentuser);
          localStorage.setItem('currentuser', JSON.stringify(this.currentusrarr)) == null ? false : true;

          this.router.navigateByUrl('/user');
          //break;
        }
        else if(login["email"] === this.admin[0]["email"] && login["pass"] === this.admin[0]["password"]){
          alert("admin login successful");
          test=true;

          this.currentuser['email'] = this.admin[0]["email"];
          this.currentuser['password'] = this.admin[0]["password"];
          this.currentusrarr.push(this.currentuser);
          localStorage.setItem('currentuser', JSON.stringify(this.currentusrarr)) == null ? false : true;

          this.router.navigateByUrl('/admin');
          break;
        }
        else if((login["email"] === user["email"] && login["pass"] != user["pass"]) || (login["email"] === this.admin["email"] && login["password"] != this.admin["pass"])){
          alert("kindly check pass");
          test = true;
          break;
        }
      }
      if(test== false){
        alert("kindly check email")
      }
    }
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
