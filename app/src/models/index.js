var Parse = require('parse/node'),
    parse_config = require('../config').parse;

exports.initdb = function() {
    Parse.initialize(parse_config.app_id);
    Parse.serverURL = parse_config.server_url;
}