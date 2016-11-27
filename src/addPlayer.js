<<<<<<< HEAD
const DB = require('./mongo');
import 'rxjs/add/operator/toPromise';

import Player from './app/shared/player';

player: Player;

module.exports ={

  addPlayer(player) {
  return DB.then(db => {
    const collection = db.collection('player');
    return collection.insertOne( JSON.parse(JSON.stringify(player)))
      })
  },
};
=======
const DB = require('./mongo');
import 'rxjs/add/operator/toPromise';

import Player from './app/shared/player';

player: Player;

module.exports ={

  addPlayer(player) {
  return DB.then(db => {
    const collection = db.collection('player');
    return collection.insertOne( JSON.parse(JSON.stringify(player)))
      })
  },
};
>>>>>>> 54d384e7e56843f7d3d99733a1fc416d4a11ccd2
