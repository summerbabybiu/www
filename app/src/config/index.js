let env = process.env.NODE_ENV;
var path = require('path');

if (env == 'dev') {
  module.exports = {
    is_development: true,
    public_folder: path.join(`${__dirname}/../`, 'public'),
    session: {
      maxAge: 60 * 60 * 24 * 5 //5 days
    },
    parse: {
      app_id: 'STEPHENW',
      server_url: 'http://localhost:1337/parse'
    }
  }
} else {
  module.exports = {
    public_folder: path.join(`${__dirname}/../`, 'public'),
    session: {
      maxAge: 60 * 60 * 24 * 30
    },
    parse: {
      app_id: 'STEPHENW',
      server_url: 'http://PARSE_URL:1337/parse'
    }
  } 
}
