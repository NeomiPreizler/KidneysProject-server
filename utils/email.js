// var nodemailer = require('nodemailer');

// https://support.google.com/mail/answer/185833?hl=iw

const sentMail =  (text,subject , email) => {
  var transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'myusername@gmail.com',
//     pass: '1234-1234-1234-1234'
//   }
// });

var mailOptions = {
  from: process.env.USER,
  to: email,
  subject: subject,
  text: text,
};
// var mailOptions = {
//   from: 'myusername@gmail.com',
//   to: 'user1@gmail.com, user2@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!',
// };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports={sentMail}
}
