const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the root directory for local development
const rootPath = path.resolve(__dirname, '..');
app.use(express.static(rootPath));

// API ROUTE - Consolidating logic here as well
app.post("/api/send-email", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            replyTo: email,
            to: process.env.RECIPIENT_EMAIL || "hello@swiftcaresolution.net",
            subject: "New Contact Form Message (SwiftCare)",
            html: `
                <h3>New Message</h3>
                <p><b>Name:</b> ${firstName} ${lastName}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully" });

    } catch (error) {
        console.error("Backend Error:", error);
        res.status(500).json({ success: false, message: "Error sending email: " + error.message });
    }
});

// SERVER LISTENER (For local running via 'npm start')
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
