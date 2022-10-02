import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const About = () => {
  return (
    <>
      <Typography variant="h3" textAlign="center" style={{ margin: "1rem" }}>
        About Us
      </Typography>
      <Typography
        variant="body1"
        style={{ textIndent: "2rem", margin: "auto", width: "70%" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <List>
        {[
          { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
          { title: "Call us or email us at", p: "917-848-8128" },
          { title: "Open Monday-Friday", p: " 8am - 8pm" },
        ].map((content) => {
          return (
            <ListItem key={content.title}>
              <ListItemText
                style={{ textAlign: "center" }}
                primary={<Typography variant="h6">{content.title}</Typography>}
                secondary={<Typography variant="body1">{content.p}</Typography>}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default About;
