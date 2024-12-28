// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mailjet = require('node-mailjet');
const rateLimit = require('express-rate-limit');
const mailjet = require('mailjet');

const app = express();
app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 0 // limit each IP to 3 requests per windowMs
});

app.use(limiter);

const mailjet = new mailjet({
    apiKey: '340059fe7a8f47c08ef0e81c6c7ca686',
    secret: '27b6ca8fb85c77e7567ce19d263a218f'
})

const mailjetting = mailjet.connect(
    '340059fe7a8f47c08ef0e81c6c7ca686', 
    '27b6ca8fb85c77e7567ce19d263a218f'
);

const request = mailjetting
.post("send", { 'version': 'v3.1' })
.request({
    "Messages": [{
        "From": {
            "Email": "abotsen21@outlook.dk",
            "Name": "Ruben's Portfolio"
        },
        "To": [{
            "Email": "ruben2010@live.dk",
            "Name": "Ruben Olsen"
        }],
        "Subject": "Greetings from Mailjet.",
        "TextPart": "My first Mailjet email",
}]});

/* app.post('/send-email', (req, res) => {
    apiKey='340059fe7a8f47c08ef0e81c6c7ca686'
    secret='27b6ca8fb85c77e7567ce19d263a218f' */


const { name, email, subject, message } = req.body;
    
    /* const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "abotsen21@outlook.dk",
                        "Name": "Ruben's Portfolio"
                    },
                    "To": [
                        {
                            "Email": "ruben2010@live.dk",
                            "Name": "Ruben Olsen"
                        }
                    ],
                    "Subject": subject,
                    "TextPart": `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                }
            ]
        }); */

request
    .then((result) => {
        res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch((err) => {
        res.status(500).json({ error: err.toString() });
    });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});