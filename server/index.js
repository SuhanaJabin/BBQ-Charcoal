const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
const cors = require('cors'); 
app.use(cors());

// Path to the CSV file in the parent directory
const filePath = path.join(__dirname, '..', 'user_submissions.csv');

let customerId = 1; // Starting customer ID; this could be made persistent if needed
app.use("/",(req,res)=>{
  res.send("Server is running.")
})
app.post('/send-email', async (req, res) => {
  const { name, email, phone } = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'suhanajabinpk@gmail.com',  // replace with your email
      pass: 'qyac tfdx zgin mllg',   // replace with your email password
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

    // Create user data string for CSV format
    const userData = `${customerId},${name},${email},${phone}`;
    
    // Append user data to the CSV file
    fs.appendFile(filePath, `${userData}\n`, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ message: 'Failed to store user data' });
      }
      console.log('User data appended to CSV file');
      customerId++; // Increment the customer ID for the next user
      res.status(200).json({ message: 'Email sent and user data saved successfully!' });
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start the server


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Check if the CSV file exists; if not, create it with headers
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
