import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import { Http, Headers } from '@angular/http';
import Player from "../shared/player";
const PLAYER_URL = 'http://localhost:3000/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Input()
  player: any;
  user: any;

  constructor(public http: Http) {

  }

    ngOnInit(){
    this.player = {};
    }

    onRegisterUpdate(player: Player)
    {
      console.log(player);
      return this.http.post(PLAYER_URL, JSON.parse(JSON.stringify(player)))
        .toPromise()
        .then(response => {
          return response.json()
        })
    }

    onCancel():void {
      this.player = '     ';
    }

    onLoginSubmit() {
      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(this.player.name + ":" + this.player.password));
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      return this.http.post(PLAYER_URL + 'login' ,{}, {headers: headers})
        .toPromise()
        .then(response => {
          this.user =  response.json();
          console.log('promise',this.user);
          return this.user;
        })

     }

    onLogin4GotPWord(player) {
        let forgot = new Headers();
        forgot.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(PLAYER_URL + '/' + player, player)
          .toPromise()
          .then(response => {
            return response.json()
          })
    }
}
