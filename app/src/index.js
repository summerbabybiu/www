var express = require('express'),
    app = express();

//添加路由
require('./routes')(app);

if (module.parent) {
    module.exports = app;
} else {
    app.listen(3000, () => {
        console.log('app is running on port 3000');
    });
}