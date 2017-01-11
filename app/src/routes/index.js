var path = require('path');

function pathForHtml(file_name) {
  return path.join(__dirname + '/../public/', name);
}

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(pathForHtml('index.html'));
  });

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.sendFile(pathForHtml('404.html'));
    }
  });
};
