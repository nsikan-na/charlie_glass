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
        <TextField label="Name" />
        <Stack direction={{ xs: "column", sm: "row" }}>
          <TextField label="Email" />
          <TextField label="Phone Number" />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }}>
          {[
            { label: "Shower Doors", name: "showerDoors" },
            { label: "Shelves", name: "shelves" },
            { label: "Glass Partition", name: "glassPartition" },
            { label: "Store Fronts", name: "storeFronts" },
          ].map((content) => (
            <FormControlLabel label={content.label} control={<Checkbox />} />
          ))}
        </Stack>
        <TextField label="Messages" fullWidth minRows="4" multiline={true} />
        <Button variant="contained" style={{ margin: "1rem auto" }}>
          Contact
        </Button>
      </Container>
    </>
  );
};
export default ContactForm;
