const nodemailer = require('nodemailer');


const gmailEmail = "traveliencemailer@gmail.com";
const gmailPassword = "1921680809SCD";
const to = "rodrigo@travelience.com";

var mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});


exports.sendEmail = (subject, text) => {

    const mailOptions = {
        from: gmailEmail,
        to,
        subject,
        text
    };

    return mailTransport.sendMail(mailOptions);
};
