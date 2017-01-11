let env = process.env.NODE_ENV;

if (env == 'dev') {
  module.exports = {
    is_development: true,
    session: {
      maxAge: 60 * 5  //5 minutes
    },
    parse: {
      app_id: 'STEPHENW',
      server_url: 'http//localhost:1337/parse'
    }
  }
} else {
  module.exports = {
    session: {
      maxAge: 60 * 60 * 24 * 30
    },
    parse: {
      app_id: 'STEPHENW',
      server_url: 'http://PARSE_URL:1337/parse'
    }
  } 
}
