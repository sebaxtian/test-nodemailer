const nodemailer = require('nodemailer');

// https://nodemailer.com/smtp/oauth2/

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: 'usuario@gmail.com',
        clientId: 'RANDOMCHARS-baseso2f4dhp5som4cdk6rhiahgh6cc3.apps.googleusercontent.com',
        clientSecret: 'RANDOMCHARS-HEfgVmGH_fxWjK',
        refreshToken: '1/P6flj4Uaf-2UMadYcNfWmBLmEz0C6-wJAVTO7mrjpvs'
    }
});

var mailOptions = {
    from: 'Usuario <usuario@gmail.com>',
    to: 'destinatario@hotmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
};

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log('Error ', err);
    } else {
        console.log('Email Sent ', res);
    }
});
