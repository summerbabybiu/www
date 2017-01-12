var route = require('express').Router(),
    User = require('./models/user'),
    util = require('./models/utils'),
    config = require('../../config'),
    check_login = require('../../middlewares/check_login');

//此注册针对系统用户，不对访客开放
//开发时不要把访客有关的API写到这里来
//暂不提供修改密码，DBA才有权限修改密码
route.post('/register', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    try {
        if (!util.checkNotEmpty(username) || 
        !util.checkNotEmpty(password) || 
        !util.checkNotEmpty(email)) {
        throw new Error(`param undefined in register`);
      }
    } catch (e) {
        return next(e);
    }
    User.create({
        'username': username,
        'password': password,
        'email': email
    }).then(user => {
        res.cookie('user_token', user.getSessionToken(), { maxAge: config.session.maxAge});  
        res.send(user);
    }).catch(e => {
        res.status(400).send(e.message);
    });

});

route.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    User.login(username, password)
    .then(user => {
        res.cookie('user_token', user.getSessionToken(), { maxAge: config.session.maxAge });
        res.send(user);
    })
    .catch(e => {
        res.status(400).send(e.message);
    })
})

route.get('/user', check_login, (req, res) => {
    if (req.logged_user) {
        res.send(req.logged_user);
    } else {
        res.status(401).send('unauthorized');
    }
});

module.exports = route;