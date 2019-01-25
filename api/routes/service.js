module.exports = app => {
    app.get('/services', (req, res) => {
        res.send(services);
    });
};

const services = [];