module.exports = app => {
    app.get('/staff', (req, res) => {
        res.send(staff);
    });
};

const staff = [];