import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forg-pass',
  templateUrl: './forg-pass.component.html',
  styleUrls: ['./forg-pass.component.css']
})
export class ForgPassComponent implements OnInit {



  forgot = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    pass: ['', Validators.pattern(/^[\w@-]{6,20}$/)]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    let fuser = this.forgot.value;
    console.log(fuser);
    this.reset();
    let rawusers = localStorage.getItem('usersDB');
    if(rawusers != null){
      let users = JSON.parse(rawusers);
      console.log(users);

      for(let user of users){
        if(user["email"] === fuser["email"]){
          user["pass"] = fuser["pass"];
          console.log(user["pass"]);
          //console.log(fuser["pass"]);
          //users.push(user);
          localStorage.setItem('usersDB', JSON.stringify(users));
          alert("password has updated");
          break;
        }
        else{
          alert("this email is not registered");
        }
        //localStorage.setItem('usersDB', JSON.stringify(users));
      }
  }

  }
  reset(){
    this.forgot.reset();
  }


}
export interface User{
  name: string;
  password: string;
}
