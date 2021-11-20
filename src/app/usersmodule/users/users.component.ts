import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialogboxmodule/dialogbox/dialogbox.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'uname', 'email', 'company', 'action']
  dataSource = new MatTableDataSource<User[]>();
  role: string ='';
  userList: any = [];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });
  }


  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    let rawusers = localStorage.getItem('usersDB');
    if(rawusers != null){
      this.userList = JSON.parse(rawusers);
      console.log(this.userList)
      // this.dataSource = new MatTableDataSource<User[]>(this.userList);
      this.dataSource = this.userList;
    }
  }

  edit(){

  }

  deleterow(rowid: number){
    if(rowid > -1){
      this.userList.splice(rowid, 1);
      localStorage.setItem('usersDB', JSON.stringify(this.userList));
      this.dataSource = this.userList
    }
  }

}

export interface User{
  id: number;
  name: string;
  uname: string;
  email: string;
  pass: string;
  role: string,
  company: string;
}
