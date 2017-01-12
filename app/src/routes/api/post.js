var route = require('express').Router(),
    checkNotEmpty = require('./models/utils').checkNotEmpty,
    checkLogin = require('../../middlewares/check_login'),
    Post = require('./models/posts');

route.get('/list', (req, res, next) => {
    let page = Number(req.query.page);
    if (!checkNotEmpty(page)) {
        page = 1;
    }
    Post.get_page(page)
    .then(posts => {
        res.send(posts);
    })
    .catch(e => {
        res.status(400).send(e.message);
    })
});

route.post('/create', checkLogin, (req, res, next) => {
    if (!req.logged_user) {
        return res.status(401).send('unauthorized');
    }
    let title = req.body.title;
    let summary = req.body.summary;
    let author = req.logged_user;
    let content = req.body.content;
    try {
        if(!checkNotEmpty(title) || 
        !checkNotEmpty(summary) || 
        !checkNotEmpty(content)) {
            throw new Error('param undefined in create post');
        }
    } catch(e) {
        return next(e);
    }
    Post.create({
        'title': title,
        'summary': summary,
        'author': author,
        'content': content
    })
    .then(post => {
        res.send(post);
    })
    .catch(e => {
        res.status(400).send(e.message);
    })
});


route.post('/delete/:post_id', checkLogin, (req, res, next) => {
    if (!req.logged_user) {
        return res.status(401).send('unauthorized');
    }
    let post_id = req.params.post_id;
    try {
        if (!checkNotEmpty(post_id)) {
            throw new Error('post id should not be null');
        }
    } catch(e) {
        next(e);
    }
    Post.delete(post_id)
    .then(success => {
        res.send('success');
    })
    .catch(e => {
        res.status(400).send(e.message);
    })
});

route.get('/:post_id', (req, res, next) => {
    let post_id = req.params.post_id;
    try {
        if (!checkNotEmpty(post_id)) {
            throw new Error('post id should not be null');
        }
    } catch(e) {
        next(e);
    }
    Post.get(post_id)
    .then(post => {
        res.send(post);
    })
    .catch(e => {
        res.status(400).send(e.message);
    })
});


module.exports = route;