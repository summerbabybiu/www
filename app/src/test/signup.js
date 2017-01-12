var Parse = require('parse/node'),
    parse_config = require('../config').parse;

Parse.initialize(parse_config.app_id);
Parse.serverURL = parse_config.server_url;

function createTestObject() {
  var GameScore = Parse.Object.extend("GameScore");

  // Create a new instance of that class.
  var gameScore = new GameScore();
  gameScore.set('score', 100);

  gameScore.save()
  .then(score => {
   console.log(score);
  })
  .catch(e => {
    console.log(e);
  })
}

function queryAllSession() {
  var query = new Parse.Query(Parse.Session);
  query.find()
  .then(results => {
    console.log(results);
  })
  .catch(e => {
    console.log(e.message);
  })
}

queryAllSession();