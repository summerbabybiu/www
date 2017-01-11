var path = require('path'),
    base_path = require('../config').public_folder;

function pathForPage(page_name) {
  return path.join(base_path, `${page_name}.html`);
}

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(pathForPage('index'));
  });
  app.use('/api', require('./api'));
};
