const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTE
app.post("/send-email", async (req, res) => {

    console.log("Received email request:");

    const { firstName, lastName, email, phone, message } = req.body;

    try {
        // TRANSPORTER (Gmail example)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // EMAIL CONTENT
        const mailOptions = {
            from: email,
            replyTo: email,
            to: process.env.RECIPIENT_EMAIL || "hello@swiftcaresolution.net",
            subject: "New Contact Form Message",
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
        console.error(error);
        res.status(500).json({ success: false, message: "Error sending email" });
    }
});

// SERVER
if (process.env.NODE_ENV !== 'production') {
    app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
    });
}

module.exports = app;


