import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user:any;

  constructor() { }

  ngOnInit(): void {
    let rawuser = localStorage.getItem('currentuser');
    if(rawuser != null){
      this.user = JSON.parse(rawuser);
      console.log(this.user);
    }
  }

}
