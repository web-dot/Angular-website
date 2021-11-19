import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  users: User[] = []
  titleAlert: string = 'This field is required';

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
          //return "this email is registered, kindly login";
        }
      }
    }
  }

  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  regForm =this.fb.group({
    name: [null, [Validators.required, Validators.minLength(6)]],
    uname: ['',[Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.pattern(this.emailregex)]],
    pass: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)]]
  })

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {

  }

  submit(){
    let user = this.regForm.value;
    console.log(user);
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


  getErrorEmail(){
    return this.regForm.get('email')?.hasError('required') ? 'Field is required' : this.regForm.get('email')?.hasError('alreadyInUse') ?
    'this email address is already in use' : '';
  }

  getErrorPassword() {
    return this.regForm.get('pass')?.hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.regForm.get('pass')?.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }



}

export interface User{
  name: string;
  uname: string;
  email: string;
  password: string;
}
