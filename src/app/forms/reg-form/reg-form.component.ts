import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  users: User[] = []
  

  regForm = new FormGroup({
    name: new FormControl(''),
    uname: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {

  }

  submit(){
    let user = this.regForm.value; //obj
    this.users.push(user); 
    this.reset();
    localStorage.setItem('usersDB', JSON.stringify(this.users));
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
