import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import PlayerService from "../shared/player.service";
import Player from "../shared/player";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  selectedPlayer: any;
  player: any;

  constructor(public playerService: PlayerService) { }


    ngOnInit(){
    }

    onRegisterUpdate(player:Player)
    {
      return this.http.post(PLAYER_URL, JSON.parse(JSON.stringify(player)))
        .toPromise()
        .then(response => {
          return response.json()
        })
    }

    onCancel():void {
      this.player = null;
    }

    onLoginSubmit(player: any):void {
      this.selectedPlayer = player;
     }

    onLogin4GotPWord(player):void {
      this.playerService.updatePlayer(this.player, this.player._id)
      .then(() => this.player = null);
    }
}
