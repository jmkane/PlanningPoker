import 'rxjs/add/operator/toPromise';


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
}
