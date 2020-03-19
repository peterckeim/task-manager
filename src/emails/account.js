const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'peter.c.keim@gmail.com',
//     from: 'no-reply@jyuno.com',
//     subject: 'Testing my email',
//     text: 'I hope this one actually works.'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'welcome@jyuno.com',
        subject: 'Welcome to my dumb app!',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app :D`,
        html: `Welcome to the app, ${name}! Let me know how you get along with the app :D`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'waitstop@jyuno.com',
        subject: 'Wait, where you going?',
        text: `Hey hey whoa whoa, ${name}! The heck? What; why you deletin' your account, dog?`,
        html: `Hey hey whoa whoa, ${name}! The heck? What; why you deletin' your account, dog?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}