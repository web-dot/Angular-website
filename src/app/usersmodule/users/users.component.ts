import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'uname', 'email', 'company', 'action']
  // dataSource = new MatTableDataSource<User[]>();
  dataSource : any[] = []
  role: string ='';
  userList: any = [];


  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  // openDialog(action,obj) {
  //   obj.action = action;
  //   let  dialogRef = this.dialog.open(DialogBoxComponent, {
  //     width: '250px',
  //     data:obj
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //    if(result.event == 'Update'){
  //      console.log(result.data)
  //       this.updateRowData(result.data);
  //     }else if(result.event == 'Delete'){
  //       this.deleteRowData(result.data);
  //     }
  //   });
  // }

  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      console.log(value.id);
      console.log(row_obj.id);
      if(value.id == row_obj.id){
        value.name = row_obj.name;

      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
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



}

export interface User{
  id: number;
  name: string;
  uname: string;
  email: string;
  company: string;
}
