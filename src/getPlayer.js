<<<<<<< HEAD
const DB = require('./mongo');
import 'rxjs/add/operator/toPromise';

import Player from './app/shared/player';

 player: Player;

  module.exports = { getPlayer(player) {
    return DB.then(db => {
      const query = {player};
      return db.collection('player')
        .find(query)
        .toArray();
    });
  };



=======
const DB = require('./mongo');
import 'rxjs/add/operator/toPromise';

import Player from './app/shared/player';

 player: Player;

  module.exports = { getPlayer(player) {
    return DB.then(db => {
      const query = {player};
      return db.collection('player')
        .find(query)
        .toArray();
    });
  };



>>>>>>> 54d384e7e56843f7d3d99733a1fc416d4a11ccd2
