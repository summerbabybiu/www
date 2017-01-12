var Parse = require('parse/node');

module.exports = {
  // 注册一个用户
  // {
  //   username: string,
  //   password: string,
  //   email: string
  // }
  create: function(info) {
    var user = new Parse.User();
    user.setUsername(info.username);
    user.setPassword(info.password);
    user.setEmail(info.email);
    return user.signUp();
  },
  login: function (username, password) {
    return Parse.User.logIn(username, password);
  }
};
