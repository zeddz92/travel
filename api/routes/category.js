const paginate = require("paginate-array");

const categories = require('../mocks/categories');
const posts = require('../mocks/posts');

const filterPostsByCategoryId = function (path, callback) {
    const categoryIdExist = categories.filter(category =>  category.path === path).length > 0;
    if (!categoryIdExist) {
        return callback({
            code: 404,
            message: "Category does not exist"
        });
    }


    const filteredPosts = posts.filter(post => (post.categories.filter(category => category.path === path).length));
    return callback(null, filteredPosts);
};

module.exports = app => {
    app.get('/categories', (req, res) => {
        res.send(categories);
    });

    app.get('/categories/:path/posts', (req, res) => {
        const {path} = req.params;
        filterPostsByCategoryId(path, function (error, collection) {
            if(error) {
                res.status(error.code);
                return res.send(error);
            }
            const {page, perPage} = req.query;
            const posts = paginate(collection, page, perPage);

            res.send(posts);
        });
    });
};


