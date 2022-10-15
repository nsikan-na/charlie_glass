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
          <h3>${email}</h3>
          <h3>${phoneNumber}</h3>
          <h4>${services}</h4>
          <h4>${message}</h4>
          `,
      };
      // sgMail.send(msg);
      return res.json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
}
