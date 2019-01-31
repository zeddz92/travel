const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

const defaultQueryParams = require('./middlewares/defaultQueryParams');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator());


app.use(defaultQueryParams);

// Routes
require('./routes/post')(app);
require('./routes/staff')(app);
require('./routes/category')(app);
require('./routes/service')(app);
require('./routes/company')(app);
require('./routes/job')(app);
require('./routes/contact')(app);



app.get('/', (req, res) => {
    res.send({
        message: "Welcome to travelience"
    });

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});