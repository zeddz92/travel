const validator = require('validator');
const contactController = require('../controllers/contact');

module.exports = app => {
    app.post(
        '/contact',
        contactController.validate('contactForm'),
        contactController.sendContactEmail,
    )
};


