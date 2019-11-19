var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: '587',
    auth: {
        user: 'hey28you1995@gmail.com',
        pass: 'hey123you'
    }
});

var mailOptions = {
    from: 'hey28you1995@gmail.com',
    to: 'sayali@kanris.biz, rishi@kanris.biz',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});