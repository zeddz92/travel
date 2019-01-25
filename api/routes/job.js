module.exports = app => {
    app.get('/jobs', (req, res) => {
        res.send(jobs);
    });
};

const jobs = [];