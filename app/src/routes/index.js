var path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile('index.html');
  });
  app.use('/api', (req, res) => {
    res.send('api router in build');
  });
};
