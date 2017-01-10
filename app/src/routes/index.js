module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('site is in building');
  });

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.send('404');
    }
  });
};
