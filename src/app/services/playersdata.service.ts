import { Player } from './../Player';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersdataService {

  constructor(private http: HttpClient) {}

  getPlayersDataFromJson(): Observable<Player[]>{
    //cast Observable into a Player[]
    return this.http.get<Player[]>("../assets/players.json")
  }

}
