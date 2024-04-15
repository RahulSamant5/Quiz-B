const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-password' // Your email password (use environment variables in production)
    }
});

// Function to send email
function sendEmail(score) {
    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com', // Email address to send the score
        subject: 'Quiz Score',
        text: `The quiz score is: ${score}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Usage
const score = 75; // Example score
sendEmail(score);
