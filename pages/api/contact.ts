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
      console.log(req.body);
      const { name, email, message, phoneNumber, services } = JSON.parse(
        JSON.stringify(data)
      );
      if (!name || !email || !phoneNumber || services.length === 0) {
        return res.json({
          success: false,
          message: "Please complete all fields!",
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
      sgMail.send(msg);
      return res.json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
}
