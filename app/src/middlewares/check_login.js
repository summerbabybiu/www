var Parse = require('parse/node');

module.exports = function(req, res, next) {
    let token = req.cookies.user_token;
    if (token && token.length > 0) {
        find_user(token)
        .then(session => {
            req.logged_user = session.user;
        })
        .catch(e => {
            next();
        })
    } else {
        next();
    }
}

function find_user(sessionToken) {
    var query = new Parse.Query(Parse.Session);
    query.equalTo('sessionToken', sessionToken);
    query.include('user');
    return query.find();
}