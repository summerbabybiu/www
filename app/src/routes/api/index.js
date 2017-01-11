var route = require('express').Router(),
    auth = require('./auth');

route.use('/auth', auth);
route.all('/ping', (req, res) => {
    res.send('pong');
});



module.exports = route;