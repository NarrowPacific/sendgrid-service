const sgMail = require('@sendgrid/mail');

async function sendEmails(sgApiKey, fromEmail, toEmails, subject, content) {
  const msg = {
    to: toEmails,
    from: fromEmail,
    subject,
    text: content,
    html: content,
  };

  sgMail.setApiKey(sgApiKey);

  if (Array.isArray(toEmails)) {
    return sgMail.sendMultiple(msg);
  } else {
    return sgMail.send(msg);
  }
}

module.exports = {
  sendEmails,
};
