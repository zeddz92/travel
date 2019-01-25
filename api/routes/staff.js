const staff = require('../mocks/staff');

module.exports = app => {
    app.get('/staff', (req, res) => {
        res.send(staff);
    });
};

