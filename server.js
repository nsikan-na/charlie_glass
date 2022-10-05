const express = require("express");
const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.post("/contact", async (req, res) => {
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
        !message ||
        !phoneNumber ||
        services.length === 0
      ) {
        return res.json({
          success: false,
          message: "Please complete all fields!",
        });
      }
      if (services.includes("showerDoors")) {
        const msg = {
          to: process.env.REACT_APP_SHOWER_DOOR_SERVICE_EMAIL,
          from: process.env.REACT_APP_SENDER_EMAIL,
          subject: "Message from Charlie Glass Inc.",
          html: `
          <h1>From ${name},</h1>
          <h3>${email}</h3>
          <h3>${phoneNumber}</h3>
          ${services.map((service) => `<h4>${service}</h4>`)}
            <h4>${message}</h4>
          }`,
        };
        // await sgMail.send(msg);
      }
      if (services.includes("Shelves")) {
        const msg = {
          to: process.env.REACT_APP_SHELVES_SERVICE_EMAIL,
          from: process.env.REACT_APP_SENDER_EMAIL,
          subject: "Message from Charlie Glass Inc.",
          html: `
          <h1>From ${name},</h1>
          <h3>${email}</h3>
          <h3>${phoneNumber}</h3>
          <h4>Shelves</h4>
          <h5>${message}</h5>
          }`,
        };
        // await sgMail.send(msg);
      }
      if (services.includes("glassPartition")) {
        const msg = {
          to: process.env.REACT_APP_GLASS_PARTITION_SERVICE_EMAIL,
          from: process.env.REACT_APP_SENDER_EMAIL,
          subject: "Message from Charlie Glass Inc.",
          html: `
          <h1>From ${name},</h1>
          <h3>${email}</h3>
          <h3>${phoneNumber}</h3>
          <h4>Glass Partition</h4>
          <h5>${message}</h5>
          }`,
        };
        // await sgMail.send(msg);
      }
      if (services.includes("storeFronts")) {
        const msg = {
          to: process.env.REACT_APP_STORE_FRONTS_SERVICE_EMAIL,
          from: process.env.REACT_APP_SENDER_EMAIL,
          subject: "Message from Charlie Glass Inc.",
          html: `
          <h1>From ${name},</h1>
          <h3>${email}</h3>
          <h3>${phoneNumber}</h3>
          <h4>StoreFronts</h4>
          <h5>${message}</h5>
          }`,
        };
        // await sgMail.send(msg);
      }
      return res.json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
});

app.listen(PORT);
