const paginate = require("paginate-array");

const categories = require('../mocks/categories');
const posts = require('../mocks/posts');

const filterPostsByCategoryId = function (id, callback) {
    const categoryId = Number(id);
    const categoryIdExist = categories.filter(category => category.id === categoryId).length > 0;
    if (!categoryIdExist) {
        return callback({
            code: 404,
            message: "Category id does not exist"
        });
    }

    const filteredPosts = posts.filter(post => (post.categories.filter(category => category.id === categoryId).length));
    return callback(null, filteredPosts);
};

module.exports = app => {
    app.get('/categories', (req, res) => {
        res.send(categories);
    });

    app.get('/categories/:id/posts', (req, res) => {
        const {id} = req.params;
        filterPostsByCategoryId(id, function (error, collection) {
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


