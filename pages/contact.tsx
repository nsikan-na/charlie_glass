import React from "react";
import {
  Box,
  Typography,
  Container,
  Input,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  TextField,
  Stack,
  FormControlLabel,
} from "@mui/material";
import ContactForm from "../components/contactForm";
export default function Contact() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Typography variant="h3" textAlign="center" style={{ margin: "1rem" }}>
        Contact
      </Typography>
      <Typography
        variant="body1"
        style={{
          textIndent: "2rem",
          margin: "auto",
          width: "70%",
          marginBottom: "1rem",
        }}
      >
        What service can out specialists provide you with today?
      </Typography>
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
      >
        <Container
          style={{
            backgroundColor: "#1769aa",
            color: "white",
            padding: "2%",
          }}
        >
          <Typography variant="h5" textAlign="center" style={{}}>
            Charlie Glass Inc.
          </Typography>
          <List style={{ margin: "0 auto" }}>
            {[
              { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
              { title: "Call us or email us at", p: "917-848-8128" },
              { title: "Open Monday-Friday", p: " 8am - 8pm" },
            ].map((content) => {
              return (
                <ListItem key={content.title}>
                  <ListItemText
                    style={{ textAlign: "center" }}
                    primary={<Typography>{content.title}</Typography>}
                    secondary={<Typography>{content.p}</Typography>}
                  ></ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Container>
        <ContactForm />
      </Stack>
    </>
  );
}
