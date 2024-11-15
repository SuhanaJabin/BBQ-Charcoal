const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Updated CORS configuration
app.use(cors({
  origin: 'https://bbq-charcoal-client.vercel.app', // Your frontend domain
  methods: ['GET', 'POST', 'OPTIONS'], // Allow necessary methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers allowed in requests
}));

// Handle preflight requests (important for CORS)
app.options('*', cors());

// Path to the CSV file in the parent directory
const filePath = path.join(__dirname, '..', 'user_submissions.csv');

let customerId = 1; // Starting customer ID

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.post('/send-email', async (req, res) => {
  const { name, email, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'suhanajabinpk@gmail.com',
      pass: 'qyac tfdx zgin mllg', // Be cautious with sensitive data
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

    const userData = `${customerId},${name},${email},${phone}`;

    fs.appendFile(filePath, `${userData}\n`, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ message: 'Failed to store user data' });
      }
      console.log('User data appended to CSV file');
      customerId++;
      res.status(200).json({ message: 'Email sent and user data saved successfully!' });
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  if (!fs.existsSync(filePath)) {
    const headers = 'CustomerID,Name,Email,Phone\n';
    fs.writeFile(filePath, headers, (err) => {
      if (err) {
        console.error('Error creating CSV file:', err);
      } else {
        console.log('CSV file created successfully with headers');
      }
    });
  }
});
