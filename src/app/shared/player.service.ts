const MongoClient = require('mongodb').MongoClient;
import 'rxjs/add/operator/toPromise';

import Player from './player';

export default class PlayerService {

  player: any;

  getPlayer(player): Promise<any[]> {
    return MongoClient.then(db => {
      const query = {player};
      return db.collection('player')
        .find(query)
        .toArray();
    });
  };

  updatePlayer(player, _id): Promise<any> {

    const copyPlayer = JSON.parse(JSON.stringify(player))

    if(copyPlayer._id){
      delete copyPlayer._id;
    }
    if(copyPlayer._id) {
      delete copyPlayer._id;
    }
    return MongoClient.then(db => {
      const collection = db.collection('player');
      return collection.findOneAndUpdate
    ( {copyPlayer})
      .toPromise()
      .then(response => {
        return response.json()
      })
  },
 };

  addPlayer(player: Player) {
      return MongoClient.then(db => {
        const collection = db.collection('player');
        return collection.insertOne( JSON.parse(JSON.stringify(player)))
      .toPromise()
      .then(response => {
        return response.json()
      })
  },
};

}
