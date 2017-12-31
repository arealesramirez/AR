'use strict';
import Contact from '../models/contact.model';
import { Subject } from 'rxjs/Subject';

const CONFIG_SETTINGS = require('./../config/config.settings');
const nodemailer = require('nodemailer');
// var SmtpTransport = require("nodemailer-smtp-transport");

function send(req, res, next) {
    var contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });

    var emailSettings = CONFIG_SETTINGS.default.configSettings.emailSettings;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: emailSettings.host,
        port: emailSettings.port,
        secure: emailSettings.secure,
        auth: {
            user: emailSettings.username,
            pass: emailSettings.password,
        },
        tls: {
            rejectUnauthorized:emailSettings.rejectUnauthorized,
        },
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: contact.email,
        to: emailSettings.username,
        subject: contact.subject,
        html: '<p>From: ' + contact.name + '</p>' +
            '<p>Message:' + contact.message + '</p>',
    };

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({
                title: 'Error while sending the email',
                error: error,
            });
        }
        res.status(200).json({
            message: 'Message sent!',
            obj: contact,
        });

    });

}

export default { send };
