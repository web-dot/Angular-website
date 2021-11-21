import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, forkJoin, of } from 'rxjs'
import { User } from '../model/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users'

  userList: any = [];


  getUserData(){
    let rawusers = localStorage.getItem('usersDB');
    if(rawusers != null){
      this.userList = JSON.parse(rawusers);
    }
  }
  rawusers = JSON.parse(localStorage.getItem('usersDB'));

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return of(this.rawusers);
  }

  updateUser(user: User): Observable<User> {
    return of(this.rawusers);
  }

  addUser(user: User): Observable<User> {
    return of(this.rawusers);
  }

  deleteUser(id: number): Observable<User> {
    return of(this.rawusers);
  }

  deleteUsers(users: User[]): Observable<User[]> {
    return of(this.rawusers);
  }
}
