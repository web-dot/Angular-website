import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { User, UserSchema } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


const USER_SCHEMA = {
  "id": "number",
  "name": "text",
  "uname": "text",
  "email": "text",
  "company": "text",
  "isEdit":"isEdit"
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})



export class UsersComponent implements OnInit {

  displayedColumns: string[] = Object.keys(UserSchema);
  dataSchema = UserSchema;
  dataSource = new MatTableDataSource<User>();

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.dataSource.data = res;
      console.log(this.dataSource.data)
    })
  }

  editRow(row) {
    if (row.id === 0) {
      console.log(row.id)
      this.userService.addUser(row).subscribe(res => {
        row.id = res.id;
        row.isEdit = false;
      });
    } else {
      this.userService.updateUser(row).subscribe(() => row.isEdit = false);
    }
  }

  addRow() {
    const newRow: User = {id: 0, name: "", email: "", phone: "", isEdit: true, isSelected: false}
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((u: User) => u.id !== id);
    });
  }

  removeSelectedRows() {
    const users= this.dataSource.data.filter((u: User) => u.isSelected);
    this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.userService.deleteUsers(users).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter((u: User) => !u.isSelected);
        });
      }
    });
  }
}

// export interface User{
//   id: number;
//   name: string;
//   uname: string;
//   email: string;
//   company: string;
// }
