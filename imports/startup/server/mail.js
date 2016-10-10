process.env.MAIL_URL = "smtp://postmaster%40sandboxc997df404ede43aca609f0f4115b8410.mailgun.org:628fc5a8fceaff198393909d7d82640a@smtp.mailgun.org:25";

import { Email } from "meteor/email";

Meteor.methods({
    sendEmail: function (to, from, subject, text) {
        //check([to, from, subject, text], [String]);
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        //this.unblock();
        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    }
});
