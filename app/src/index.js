var express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('site is in building');
});

if (module.parent) {
    module.exports = app;
} else {
    app.listen(3000, () => {
        console.log('app is running on port 3000');
    });
}