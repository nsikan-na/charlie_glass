import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

export default function Contact() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Typography variant="h3" align="center">
        Contact
      </Typography>
      <Typography style={{ marginBottom: "3%" }}>
        What service can out specialists provide you with today?
      </Typography>
      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Container
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "2%",
          }}
        >
          <Typography>Charlie Glass Inc</Typography>
          <ul style={{ margin: "0 auto" }}>
            {[
              { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
              { title: "Call us or email us at", p: "917-848-8128" },
              { title: "Open Monday-Friday", p: " 8am - 8pm" },
            ].map((content) => {
              return (
                <li>
                  <Typography>{content.title}</Typography>
                  <Typography>{content.p}</Typography>
                </li>
              );
            })}
          </ul>
        </Container>
        <Container>
          {/* <form onSubmit={onFinish}>
            <Container>
              {[
                {
                  label: "Name",
                  name: "name",
                },
                {
                  label: "Email",
                  name: "email",
                },
                {
                  label: "Phone Number",
                  name: "phoneNumber",
                },
              ].map((content) => {
                return (
                  <>
                    <label htmlFor={content.name}>{content.label}</label>
                    <br />
                    <input
                      name={content.name}
                      variant="outlined"
                      id={content.name}
                    />
                    <br />
                  </>
                );
              })}
            </Container>
            <Container>
              {[
                { name: "showerDoors", label: "Shower Doors" },
                { name: "shelves", label: "Shelves" },
                { name: "glassPartition", label: "Glass Partition" },
                { name: "storeFronts", label: "Store Fronts" },
              ].map((content) => {
                return (
                  <>
                    <input
                      type="checkbox"
                      name={content.name}
                      variant="outlined"
                      id={content.name}
                    />
                    <label htmlFor={content.name}>{content.label}</label>
                    <br />
                  </>
                );
              })}
              <textarea label="Message" name="message" />
              <br />
              <button type="">Submit</button>
            </Container>
          </form> */}
        </Container>
      </Box>
    </>
  );
}
