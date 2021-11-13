import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  users: User[] = []
  
  
  
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



  // eventlistener = function(){
  //   document.querySelector("form")?.addEventListener('keyup', (e) => {
  //     let targetelement = e.target;
  //       if(targetelement != null){
  //         let email = targetelement.
  //       }
  //   })
  // }

  submit(){
    let user = this.regForm.value;
    console.log(user);
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
