import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  TextField,
  Stack,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";

const ContactForm = () => {
  return (
    <>
      <Container style={{ margin: "1rem" }}>
        <TextField label="Name" style={{ margin: ".5rem" }} size="small" />
        <Stack direction={{ xs: "column", sm: "row" }}>
          <TextField label="Email" style={{ margin: ".5rem" }} size="small" />
          <TextField
            label="Phone Number"
            style={{ margin: ".5rem" }}
            size="small"
          />
        </Stack>
        <Typography
          variant="body1"
          style={{
            margin: "1rem",
          }}
          textAlign="center"
        >
          What service can out specialists provide you with today?
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
          style={{ width: "80%" }}
          minRows="4"
          multiline={true}
          size="small"
        />
        <br />
        <Button
          variant="contained"
          style={{ margin: "1rem auto" }}
          className="unSelected"
        >
          Contact
        </Button>
      </Container>
    </>
  );
};
export default ContactForm;
