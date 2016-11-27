const DB = require('./mongo');
// import 'rxjs/add/operator/toPromise';

import Player from './app/shared/player';

player: Player;

module.exports = {updatePlayer(player, _id) {

  const copyPlayer = JSON.parse(JSON.stringify(player))

  if(copyPlayer._id){
  delete copyPlayer._id;
}
if(copyPlayer._id) {
  delete copyPlayer._id;
}
return DB.then(db => {
  const collection = db.collection('player');
  return collection.findOneAndUpdate
  ( {copyPlayer})
    })
},
};


