var path = require('path');

function pathForPage(page_name) {
  let base_path = `${__dirname}/../public/`;
  return path.join(base_path, `${page_name}.html`);
}

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(pathForPage('index'));
  });
  app.use('/api', (req, res) => {
    res.send('api router in build');
  });
};
