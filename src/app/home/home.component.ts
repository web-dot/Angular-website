import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;

  constructor() {

   }

  ngOnInit(): void {

    let rawuser = localStorage.getItem('currentuser');
    if(rawuser != null){
      this.user = JSON.parse(rawuser);
      console.log(this.user);
    }
  }


}
