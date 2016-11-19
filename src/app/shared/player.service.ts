import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import Player from './player';

const PLAYER_URL = 'https://helio-restaurants.mod.bz/v1/restaurants';

@Injectable()
export default class PlayerService {

  player: any;


  constructor(public http: Http) {

  }

  getPlayer(): Promise<any[]> {
    return this.http.get(PLAYER_URL)
      .toPromise()
      .then(response => {
        return response.json()
        // .map(restaurant => new any(restaurant._id, restaurant.addressBuilding))
      });
  }

  updatePlayer(player, _id): Promise<any> {

    const copyPlayer = JSON.parse(JSON.stringify(player))

    if(copyPlayer._id){
      delete copyPlayer._id;
    }
    if(copyPlayer._id) {
      delete copyPlayer._id;
    }

    return this.http.put(PLAYER_URL + '/' + _id, copyPlayer)
      .toPromise()
      .then(response => {
        return response.json()
      })
  }

  addPlayer(player: Player) {
    return this.http.post(PLAYER_URL, JSON.parse(JSON.stringify(player)))
      .toPromise()
      .then(response => {
        return response.json()
      })
  }
}
