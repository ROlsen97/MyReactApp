// server.js
require('dotenv').config(); // Loader miljøvariabler fra .env-filen
const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const Mailjet = require('node-mailjet');
const cors = require('cors');

// Angiv de oprindelser, der skal have adgang
const allowedOrigins = [
    'http://localhost:3000',              // Lokal udviklingsapp
    'https://rolsen97.github.io' // Deployet app
];

const corsOptions = {
    origin: (origin, callback) => {
        // Tillad oprindelse, hvis den er i listen eller undefined (f.eks. Postman)
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Rate limiter for at forhindre spam
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutter
    max: 100, // Maksimalt 100 forespørgsler per IP per vindue
});

app.use(limiter);
//console.log("Mailjet secret: " + process.env.MAILJET_API_SECRET);

// Initialiser Mailjet-klienten
const mailjet = new Mailjet({
    apiKey : process.env.MAILJET_API_KEY,
    apiSecret : process.env.MAILJET_API_SECRET,
});

// Endpoint til at sende email
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validering af input
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Opsætning af email-besked
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'abotsen21@outlook.dk',
                    Name: "Ruben's Portfolio",
                },
                To: [
                    {
                        Email: 'ruben2010@live.dk',
                        Name: 'Ruben Olsen',
                    },
                ],
                Subject: subject,
                TextPart: `Message from ${name} (${email}):\n\n${message}`,
                HTMLPart: `<h3>Message from ${name} (${email}):</h3><p>${message}</p>`,
            },
        ],
    });

    // Håndtering af Mailjet-respons
    request
        .then(result => {
            res.status(200).json({ message: 'Email sent successfully', data: result.body });
        })
        .catch(err => {
            //console.error('Error sending email:', err);
            res.status(500).json({ error: 'Failed to send email', details: err.toString() });
        });
});

// Start serveren
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
