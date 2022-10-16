import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
      const emailReg = /(.+)@(.+){2,}\.(.+){2,}/;
      const phoneNumberReg = /^\d{10}$/;
      const errors: string[] = [];

      if (
        !name ||
        !email ||
        !phoneNumber ||
        services.length === 0 ||
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
        )
      ) {
        errors.push(
          "Phone Number is invalid. Please enter a valid phone number. For example, XXX-XXX-XXXX."
        );
      }
      if (services.length === 0) {
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
      const msg = {
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: "Message from Charlie Glass Inc.",
        html: `
          <h1>From ${name},</h1>
          <h2>Services Requested</h2>
          ${`<ul>${services.map(
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
      sgMail.send(msg);
      return res.json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
}
