import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { name, email, message, phoneNumber, services } = JSON.parse(
        JSON.stringify(data)
      );

      const servicesArr: string[] = [];
      if (services.showerDoors) servicesArr.push("Shower Doors");
      if (services.shelves) servicesArr.push("Shelves");
      if (services.glassPartition) servicesArr.push("Glass Partition");
      if (services.storeFronts) servicesArr.push("Store Fronts");
      if (services.mirrors) servicesArr.push("Mirrors");
      if (services.other) servicesArr.push("Other");

      const emailReg = /(.+)@(.+){2,}\.(.+){2,}/;
      const phoneNumberReg = /^\d{10}$/;
      const errors: string[] = [];

      if (
        !name ||
        !email ||
        !phoneNumber ||
        servicesArr.length === 0 ||
        !message
      ) {
        errors.push("Please complete all fields.");
      }

      if (!name) {
        errors.push("Please enter a name!");
      }

      if (!emailReg.test(email.replaceAll(" ", ""))) {
        errors.push(
          "Email is invalid. Please enter a valid email. For example, mark@gmail.com."
        );
      }

      if (
        !phoneNumberReg.test(
          phoneNumber
            .replaceAll("-", "")
            .replaceAll("/", "")
            .replaceAll(" ", "")
            .replaceAll("(", "")
            .replaceAll(")", "")
        )
      ) {
        errors.push(
          "Phone Number is invalid. Please enter a valid phone number. For example, XXX-XXX-XXXX."
        );
      }

      if (servicesArr.length === 0) {
        errors.push("Please select at least one service.");
      }

      if (!message) {
        errors.push(
          "Please include a short description of what service you are interested in."
        );
      }

      if (errors.length !== 0) {
        return res.json({
          success: false,
          errors: errors[0],
        });
      }

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.TO_EMAIL,
        subject: "Message from Charlie Glass Inc.",
        html: `
          <h1>From ${name},</h1>
          <h2>Services Requested</h2>
          ${`<ul>${servicesArr.map(
            (service: string) => `<li>${service}</li>`
          )}</ul>`
            .toString()
            .replaceAll(",", "")}
          <h3>Message</h3>
          <p>${message}</p>
          <h4 style='margin-bottom:-.05rem'>Email: </h4>
          <div>${email}</div>
          <h4 style='margin-bottom:-.05rem'>Phone Number: </h4>
          <div>${phoneNumber}</div>
        `,
      };

      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          console.log("Error sending email:", error);
          return res
            .status(500)
            .json({ success: false, error: "Error sending email" });
        } else {
          console.log("Email sent:", info.response);
          return res.json({ success: true });
        }
      });
    } catch (err) {
      console.log("ERROR", err);
      return res.status(500).json({ success: false, error: "Server error" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }
}
