const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator());


// Routes
require('./routes/post')(app);
require('./routes/staff')(app);
require('./routes/category')(app);
require('./routes/service')(app);
require('./routes/company')(app);
require('./routes/job')(app);
require('./routes/contact')(app);

app.all(function (req, res, next) {
    const {page, perPage} = req.query;
    if (!page || page < 1) req.query.page = 1;
    if (!perPage || perPage < 10) req.query.perPage = 10;
    next();
});

app.get('/', (req, res) => {
    res.send({
        message: "Welcome to travelience"
    });

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});