var nodemailer = require('nodemailer');

// https://support.google.com/mail/answer/185833?hl=iw

const sendEmail =  (text,subject,email) => {
  var transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASSWORD_MAIL
    }
  });

// '36325608008@mby.co.il'
var mailOptions = {
  from: process.env.USER_MAIL,
  to: email,
  subject: subject,
  text: text,
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
module.exports=sendEmail

