const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = process.env.MONGO_URI;

module.exports = MongoClient.connect(MONGO_URI);
