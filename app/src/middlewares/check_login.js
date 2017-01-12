var Parse = require('parse/node');

module.exports = function(req, res, next) {
    let token = req.cookies.user_token;
    if (token && token.length > 0) {
        find_user(token)
        .then(user => {
            req.logged_user = user;
            next();
        })
        .catch(e => {
            next();
        })
    } else {
        next();
    }
}

function find_user(sessionToken) {
    return Parse.User.become(sessionToken);
}