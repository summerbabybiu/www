var route = require('express').Router(),
    auth = require('./auth'),
    post = require('./post');

route.use('/auth', auth);
route.use('/post', post);
route.all('/ping', (req, res) => {
    res.send('pong');
});



module.exports = route;