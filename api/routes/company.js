module.exports = app => {
    app.get('/company', (req, res) => {
        res.send(company);
    });
};

const company = {};