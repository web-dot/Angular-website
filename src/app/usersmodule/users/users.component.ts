import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'uname', 'email', 'company']
  dataSource = new MatTableDataSource<User[]>();
  role: string ='';
  // usersList: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    let rawusers = localStorage.getItem('usersDB');
    if(rawusers != null){
      let usersList = JSON.parse(rawusers);
      usersList.push()
      this.dataSource = new MatTableDataSource<User[]>(usersList);
    }
  }

}

export interface User{
  name:'';
  uname:'';
  email:'';
  pass:'';
  company:'';
}