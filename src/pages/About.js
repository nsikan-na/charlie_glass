import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function About() {
  return (
    <>
      <Container>
        <Typography variant="h3" textAlign="center">
          About Us
        </Typography>
        <Typography className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
      <ul style={{ width: "25%", margin: "0 auto" }}>
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
    </>
  );
}
