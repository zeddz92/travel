const jobs = require('../mocks/jobs');

module.exports = app => {
    app.get('/jobs', (req, res) => {
        const lng = req.query.lng || 'en';
        res.send(jobs[lng]);
    });
};

