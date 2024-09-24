import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { to, subject, text } = req.body;

  // Set up Nodemailer transporter (you can use a real SMTP service)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Example with Gmail (replace with your service)
    auth: {
      user: 'eventrablessings@gmail.com',
      pass: 'yourpassword', // Replace with real credentials or use environment variables
    },
  });

  try {
    await transporter.sendMail({
      from: 'eventrablessings@gmail.com',
      to,
      subject,
      text,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.' });
  }
}
