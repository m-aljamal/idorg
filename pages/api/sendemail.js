import nodemailer from "nodemailer";

export default function sendEmail(req, res) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: "New Message from first1workshop Website",
    text: `
    Name: ${name} 
    Email: ${email}
    Message:  ${message}
    `,
  };

  const successEmail = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    subject: "Thank you for contact us on first1workshop",
    text: `
    Dear ${name},
    Thank you for contacting us. Our team will review your inquiry and contact you back shortly.
    Regards,
    First1workshop
    `,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ message: "Could not send email", err });
    }
    transporter.sendMail(successEmail, (err, info) => {
      return;
    });

    return res.status(200).json({ message: "Email sent" });
  });
}