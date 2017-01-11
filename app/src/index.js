var express = require('express'),
    app = express(),
    config = require('./config');

//静态资源    
app.use(express.static(config.public_folder));
//初始化数据SDK
require('./models').initdb();
//添加路由
require('./routes')(app);
//错误处理
app.use(require('./middlewares/error_handle'));

if (module.parent) {
    module.exports = app;
} else {
    //docker运行，具体物理端口由compose设定
    app.listen(3000, () => {
        console.log('app is running on port 3000');
    });
}