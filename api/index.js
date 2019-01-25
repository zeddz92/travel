const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

require('./routes/post')(app);

app.get('/', (req, res) => {
    res.send({
        message: "Welcome to travelience"
    });

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});