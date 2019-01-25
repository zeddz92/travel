const jobs = require('../mocks/jobs');

module.exports = app => {
    app.get('/jobs', (req, res) => {
        res.send(jobs);
    });
};

