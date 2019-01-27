const company = require('../mocks/company');

module.exports = app => {
    app.get('/company', (req, res) => {
        const lng = req.query.lng || 'en';
        res.send(company[lng]);
    });
};



