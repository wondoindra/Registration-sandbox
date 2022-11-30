const nodemailer = require('nodemailer')

const sendmail = (user) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f3aca1bdd5217d",
      pass: "1c234d99f3fd07",
    },
  })

  const mailOptions = {
    from: '"Signup API" <signup@mailer.com>',
    to: user.email,
    subject: 'Signup success',
    text: `${user.email} signup success`,
    html: `<b>${user.email} signup success</b>`
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Send mail error', error)
    }
    console.log('Email sent, ', info.messageId)
  })
}

module.exports = sendmail