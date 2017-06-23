const nodeMailer = require('nodemailer');
const mailerConfig = require('../config/mailer.config');

class MailerService {
    constructor(mailerConfig) {
        this.transporter = nodeMailer.createTransport(mailerConfig);
    }

    sendMail(mailOptions) {
        return new Promise((resolve, reject) => {
            return this.transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return reject(new Error(error));
                }
                return resolve(info);
            });
        })
    }
}

module.exports = new MailerService(mailerConfig);
