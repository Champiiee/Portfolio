require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Enable JSON parsing

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to generate HTML email from template
const generateEmailHTML = (formData) => {
  const templatePath = path.join(__dirname, "ContactUs", "emailTemplate.html");
  let emailHTML = fs.readFileSync(templatePath, "utf8");

  // Replace placeholders with actual form data
  emailHTML = emailHTML
    .replace("{{name}}", formData.name)
    .replace("{{surname}}", formData.surname)
    .replace("{{email}}", formData.email)
    .replace("{{message}}", formData.message);

  return emailHTML;
};

// Handle form submissions
app.post("/send-email", async (req, res) => {
  const formData = req.body;

  try {
    // Read and process the email template
    const emailHTML = generateEmailHTML(formData);

    // Send email to admin
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Admin email from .env
      subject: "New Contact Form Submission",
      html: emailHTML, // Send HTML content
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Support Team" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: "Thank you for contacting us!",
      text: `Hi ${formData.name},\n\nWe've received your message and will get back to you soon.\n\nBest regards,\nYour Team`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
