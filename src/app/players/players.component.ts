import { Player } from './../Player';
import { PlayersdataService } from './../services/playersdata.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  displayedColumns: string[] = ['player_id', 'player_name', 'dob', 'batting_hand'];
  dataSource = new MatTableDataSource<Player[]>();
  playerList: any[] = [];
  user: any;


  constructor(private playersService: PlayersdataService) { }

  ngOnInit(): void {
    this.getPlayersData();
  }

  getPlayersData(){
    this.playersService.getPlayersDataFromJson()
    .subscribe(result => {
      console.log(result);
      this.playerList = result;
      this.dataSource = new MatTableDataSource<Player[]>(this.playerList)
    })
  }

}
