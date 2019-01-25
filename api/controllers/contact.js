const {body} = require('express-validator/check');
const {validationHandler} = require('../utils/validationHandler');
const {sendEmail} = require('../utils/sendEmail');

exports.validate = (method) => {
    switch (method) {
        case 'contactForm': {
            return [
                body('name', 'the name field is required.').exists().not().isEmpty(),

                body('email', 'The email field is required.').exists().not().isEmpty(),
                body('email', 'The email must be a valid email address.').isEmail().not().isEmpty(),

                body('message', 'The message field is required.').exists().not().isEmpty(),
            ]
        }
    }
};

exports.sendContactEmail = (req, res, next) => {
    req
        .getValidationResult()
        .then(validationHandler(next, res))
        .then(() => {
            const {name, email, message} = req.body;

            const response = {
                name,
                email,
                message,
                sent: false
            };

            const body = `
                ${name} wants to contact us: 
                
                Contact Details:
                Name: ${name} 
                Email: ${email} 
                Message: ${message}`;

            sendEmail("New Contact Email", body);
            res.send(response);

        })
        .catch(next)
};