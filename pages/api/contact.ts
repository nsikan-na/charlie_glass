import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
      if (
        !name ||
        !email ||
        !phoneNumber ||
        services.length === 0
      ) {
        return res.json({
          success: false,
          message: "Please complete all fields!",
        });
      }
      // if (services.includes("showerDoors")) {
      //   const msg = {
      //     to: process.env.SHOWER_DOOR_SERVICE_EMAIL,
      //     from: process.env.SENDER_EMAIL,
      //     subject: "Message from Charlie Glass Inc.",
      //     html: `
      //     <h1>From ${name},</h1>
      //     <h3>${email}</h3>
      //     <h3>${phoneNumber}</h3>
      //     <h4>Shower Doors</h4>
      //       <h4>${message}</h4>
      //     `,
      //   };
      //   sgMail.send(msg);
      // }
      // if (services.includes("shelves")) {
      //   const msg = {
      //     to: process.env.SHELVES_SERVICE_EMAIL,
      //     from: process.env.SENDER_EMAIL,
      //     subject: "Message from Charlie Glass Inc.",
      //     html: `
      //     <h1>From ${name},</h1>
      //     <h3>${email}</h3>
      //     <h3>${phoneNumber}</h3>
      //     <h4>Shelves</h4>
      //     <h5>${message}</h5>
      //     `,
      //   };
      //   sgMail.send(msg);
      // }
      // if (services.includes("glassPartition")) {
      //   const msg = {
      //     to: process.env.GLASS_PARTITION_SERVICE_EMAIL,
      //     from: process.env.SENDER_EMAIL,
      //     subject: "Message from Charlie Glass Inc.",
      //     html: `
      //     <h1>From ${name},</h1>
      //     <h3>${email}</h3>
      //     <h3>${phoneNumber}</h3>
      //     <h4>Glass Partition</h4>
      //     <h5>${message}</h5>
      //     `,
      //   };
      //   sgMail.send(msg);
      // }
      // if (services.includes("storeFronts")) {
      //   const msg = {
      //     to: process.env.STORE_FRONTS_SERVICE_EMAIL,
      //     from: process.env.SENDER_EMAIL,
      //     subject: "Message from Charlie Glass Inc.",
      //     html: `
      //     <h1>From ${name},</h1>
      //     <h3>${email}</h3>
      //     <h3>${phoneNumber}</h3>
      //     <h4>Store Fronts</h4>
      //     <h5>${message}</h5>
      //     `,
      //   };
      //   sgMail.send(msg);
      // }
      return res.json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
}
