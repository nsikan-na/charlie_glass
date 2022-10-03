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
          sx={{ width: "80%" }}
          minRows="4"
          multiline={true}
          size="small"
        />
        <br />
        <Button
          variant="contained"
          sx={{ margin: "1rem auto", backgroundColor: "blue" }}
        >
          Contact
        </Button>
      </Container>
    </>
  );
};
export default ContactForm;
