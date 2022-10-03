import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import "../index.css";
const About = () => {
  return (
    <>
      <Typography variant="h3" textAlign="center" sx={{ margin: "1rem" }}>
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{ textIndent: "2rem", margin: "auto", width: "70%" }}
      >
        Glass company that originated in 2003. We specialize in everything that
        has to do in glass; from a shower door to glass partitions. Anything the
        customer desires our specialists are always there ensure that the
        customer is 100% satisfied. Please contact us a 917-848-8128 for all
        your glass needs.
      </Typography>
      <List>
        {[
          { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
          { title: "Call us or email us at", p: "917-848-8128" },
          { title: "Open Monday-Friday", p: " 8am - 5pm" },
        ].map((content) => {
          return (
            <ListItem key={content.title}>
              <ListItemText
                sx={{ textAlign: "center" }}
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
