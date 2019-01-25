const paginate = require("paginate-array");

const posts = require('../mocks/posts');

module.exports = app => {
    app.get('/posts', (req, res) => {

        const {page, perPage} = req.query;
        const collection = paginate(posts, page, perPage);
        res.send(collection);
    });
};

