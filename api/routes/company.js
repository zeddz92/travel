const company = require('../mocks/company');

module.exports = app => {
    app.get('/company', (req, res) => {
        res.send(company);
    });
};



