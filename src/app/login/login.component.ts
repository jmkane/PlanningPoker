import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import { Http } from '@angular/http';
import Player from "../shared/player";
const PLAYER_URL = 'http://localhost:27017';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  player: any;

  constructor(public http: Http) {

  }

    ngOnInit(){
    this.player = {};
    }

    onRegisterUpdate(player: Player)
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

    onLoginSubmit(name,password) {
      return this.http.post(PLAYER_URL ,name,password)
        .toPromise()
        .then(response => {
          return response.json()
        })
     }

    onLogin4GotPWord(player) {
        return this.http.put(PLAYER_URL + '/' + player, player)
          .toPromise()
          .then(response => {
            return response.json()
          })
    }
}
