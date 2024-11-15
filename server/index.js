const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Configure CORS
app.use(cors({
  origin: 'https://bbq-charcoal-client.vercel.app', 
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());

// CSV file path in the current directory
const filePath = 'user_submissions.csv';
let customerId = 1;

// Ensure the CSV file exists, or create it with headers
if (!fs.existsSync(filePath)) {
  const headers = 'CustomerID,Name,Email,Phone\n';
  fs.writeFileSync(filePath, headers, (err) => {
    if (err) console.error('Error creating CSV file:', err);
    else console.log('CSV file created successfully with headers');
  });
}

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.post('/send-email', async (req, res) => {
  const { name, email, phone } = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'suhanajabinpk@gmail.com', 
      pass: 'qyac tfdx zgin mllg',
    },
  });

  const mailOptions = {
    from: 'suhanajabinpk@gmail.com',
    to: 'suhanajabinpk@gmail.com',
    subject: 'New User Information',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    // Append user data to the CSV file
    const userData = `${customerId},${name},${email},${phone}\n`;
    fs.appendFileSync(filePath, userData, 'utf8');
    console.log('User data appended to CSV file');
    customerId++; // Increment the customer ID for the next user

    res.status(200).json({ message: 'Email sent and user data saved successfully!' });
  } catch (error) {
    console.error('Error sending email or saving data:', error);
    res.status(500).json({ message: 'Failed to send email or save data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
