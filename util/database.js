const mongodb = require('mongodb)');
const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb+srv://dbadmin:3nDWCrhfMPuJFb2r@cit341.fk1cs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then().catch();