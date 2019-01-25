const posts = require('../mocks/posts');

module.exports = app => {
    app.get('/posts', (req, res) => {
        res.send(posts);
    });
};

