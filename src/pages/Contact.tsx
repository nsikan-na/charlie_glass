import React from "react";
import {
  Box,
  Typography,
  Container,
  // List,
  // ListItem,
  // ListItemText,
  TextField,
  Stack,
  useMediaQuery,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import "../index.css";
export default function Contact() {
  // const onFinish = (values: any) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };
  const matches = useMediaQuery("(max-width:1400px)");

  return (
    <>
      <Box
        sx={[
          {},
          !matches && {
            width: "70%",
            margin: "0 auto 3rem",
          },
        ]}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ margin: "2rem" }}
        >
          Contact Us
        </Typography>
        <Stack
          justifyContent="space-evenly"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          sx={{ margin: "1rem 0 4rem" }}
        >
          <Container
            sx={{
              backgroundColor: "#151E3E",
              color: "white",
              padding: "4rem 0 4rem",
              margin: "1rem",
            }}
          >
  
            {/* <List sx={{ margin: "0 auto" }}>
              {[
                { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
                { title: "Call Us", p: "917-848-8128" },
                { title: "Email @", p: "info@charlieglass.com" },
                { title: "Open Monday-Friday", p: " 8am - 5pm" },
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
            </List> */}
            <Typography
              variant="body1"
              sx={{ width: "70%", margin: "auto", textIndent: "1rem" }}
            >
              Glass company that originated in 2003. We specialize in everything
              that has to do in glass; from a shower door to glass partitions.
              Anything the customer desires our specialists are always there
              ensure that the customer is 100% satisfied. Please contact us for
              all your glass needs.
            </Typography>
          </Container>
          <Container sx={{ margin: "1rem" }}>
            <TextField label="Name" sx={{ margin: ".5rem" }} size="small" />
            <Stack direction={{ xs: "column", sm: "row" }}>
              <TextField label="Email" sx={{ margin: ".5rem" }} size="small" />
              <TextField
                label="Phone Number"
                sx={{ margin: ".5rem" }}
                size="small"
              />
            </Stack>
            <Typography
              variant="body1"
              sx={{
                margin: "1rem 0",
              }}
              textAlign="left"
            >
              What service can our specialists provide you with today?
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }}>
              {[
                { label: "Shower Doors", name: "showerDoors" },
                { label: "Shelves", name: "shelves" },
                { label: "Glass Partition", name: "glassPartition" },
                { label: "Store Fronts", name: "storeFronts" },
              ].map((content, i) => (
                <FormControlLabel
                  key={i}
                  label={content.label}
                  control={<Checkbox />}
                />
              ))}
            </Stack>
            <TextField
              label="Messages"
              sx={{ width: "80%" }}
              minRows="4"
              multiline={true}
              size="small"
            />
            <br />
            <Button
              variant="contained"
              sx={{ margin: "1rem auto", backgroundColor: "#151E3E" }}
            >
              Contact
            </Button>
          </Container>
        </Stack>
      </Box>
    </>
  );
}
