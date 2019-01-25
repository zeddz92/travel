module.exports = app => {
    app.get('/categories', (req, res) => {
        res.send(categories);
    });
};

const categories = [];