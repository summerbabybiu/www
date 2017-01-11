var express = require('express'),
    app = express(),
    cookie_parser = require('cookie-parser'),
    body_parser = require('body-parser'),
    config = require('./config'),
    Parse = require('parse/node');

//静态资源    
app.use(express.static(config.public_folder));
//初始化数据SDK
Parse.serverURL = config.parse.server_url;
Parse.initialize(config.parse.app_id);
//cookie 和 body解析的中间件
app.use(cookie_parser());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
//添加路由
require('./routes')(app);
//错误处理
app.use(require('./middlewares/error_handle').not_found);

if (module.parent) {
    module.exports = app;
} else {
    //docker运行，具体物理端口由compose设定
    app.listen(3000, () => {
        console.log('app is running on port 3000');
    });
}