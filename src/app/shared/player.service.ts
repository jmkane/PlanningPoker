import 'rxjs/add/operator/toPromise';
const ADD = require('../../addPlayer');
const GET = require('../../getPlayer');
const UPDATE = require('../../updatePlayer');

import Player from './player';

export default class PlayerService {

  player: Player;

  GET(player) {
  };

  UPDATE(player, _id) {
  };

  ADD(player: Player) {
  };

}
