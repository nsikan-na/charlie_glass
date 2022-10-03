import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Stack,
  useMediaQuery,
} from "@mui/material";
import ContactForm from "../components/contactForm";
import "../index.css";
export default function Contact() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const matches = useMediaQuery("(max-width:1400px)");

  return (
    <>
      <Box
        sx={[
          {},
          !matches && {
            width: "70%",
            margin: "auto",
          },
        ]}
      >
        <Typography variant="h3" textAlign="center" sx={{ margin: "1rem" }}>
          Contact Us
        </Typography>
        <Stack
          justifyContent="space-evenly"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
        >
          <Container
            sx={{
              backgroundColor: "blue",
              color: "white",
              padding: "2%",
              margin: "1rem",
            }}
          >
            <Typography variant="h5" textAlign="center" sx={{}}>
              Charlie Glass Inc.
            </Typography>
            <List sx={{ margin: "0 auto" }}>
              {[
                { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
                { title: "Call us or email us at", p: "917-848-8128" },
                { title: "Open Monday-Friday", p: " 8am - 8pm" },
              ].map((content) => {
                return (
                  <ListItem key={content.title}>
                    <ListItemText
                      sx={{ textAlign: "center" }}
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
      </Box>
    </>
  );
}
