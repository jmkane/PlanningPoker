const DB = require('./mongo');
import 'rxjs/add/operator/toPromise';

import Player from './app/shared/player';


module.exports = {
  getPlayer(player) {
    return DB.then(db => {
      const query = { player };
      return db.collection('player')
        .find(query)
        .toArray();
    });
  }
};



