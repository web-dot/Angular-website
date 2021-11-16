import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  users: User[] = []

  email = '';

  getmail(event : any){
    this.email += event.target.value;
    console.log(event.target.value);
    let rawusers = localStorage.getItem('usersDB');
    if(rawusers != null){
      let users = JSON.parse(rawusers);
      for(let user of users){
        if(this.email === user["email"]){
          alert("this email is registered, kindly login");
        }
      }
    }
  }


  regForm =this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    uname: ['',[Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.pattern(/^[\w@-]{6,20}$/)]]
  })

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {

  }

  submit(){
    //debugger;
    let user = this.regForm.value;
    let rawusers = localStorage.getItem('usersDB');
    if(rawusers === null){
      this.users.push(user);
      localStorage.setItem('usersDB', JSON.stringify(this.users))
    }
    else{
      this.users = JSON.parse(rawusers);
      this.users.push(user);
      localStorage.setItem('usersDB', JSON.stringify(this.users));
    }
    this.reset();
  }

  reset(){
    this.regForm.reset();
  }

}

export interface User{
  name: string;
  uname: string;
  email: string;
  password: string;
}
