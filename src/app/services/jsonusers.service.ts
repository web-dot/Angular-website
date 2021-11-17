import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonusersService{

  constructor(private http: HttpClient) { }

    getUsers(){
      return this.http.get("/assets/users.json");
    }

  }
