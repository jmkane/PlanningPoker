import 'rxjs/add/operator/toPromise';
// const ADD = require('../../addPlayer');
// const GET = require('../../getPlayer');
// const UPDATE = require('../../updatePlayer');

import Player from './player';

export default class PlayerService {

  player: Player;

  addPlayer(player) {
    return new Promise((resolve, reject) => {
      return resolve(player);
    });
  }

  getPlayer(player) {
    return new Promise((resolve, reject) => {
      return resolve(player);
    });
  }

  updatePlayer(player, id) {
    return new Promise((resolve, reject) => {
      return resolve(player);
    });
  }


  //
  // GET(player) {
  // };
  //
  // UPDATE(player, _id) {
  // };
  //
  // ADD(player: Player) {
  // };

}
