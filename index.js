const sgMail = require('@sendgrid/mail');

async function sendEmail(sgApiKey, fromEmail, toEmail, subject, content) {
  const msg = {
      to: toEmail,
      from: fromEmail,
      subject: subject,
      html: content,
  };
  sgMail.setApiKey(sgApiKey);
  return sgMail.send(msg);
}

module.exports = {
  sendEmail,
};