import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function Services() {
  return (
    <>
      <Typography variant="h3" align="center">
        Services
      </Typography>
      <Typography className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {[
          {
            title: "Shower Doors",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
          {
            title: "Shelves",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
          {
            title: "Glass Parition",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
          {
            title: "Storefronts",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
        ].map((content) => {
          return (
            <>
              <Container
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "1%",
                  margin: "3%",
                }}
              >
                <Typography
                  style={{ textAlign: "center" }}
                >{`${content.title}:`}</Typography>
                <Typography
                  style={{ textAlign: "center" }}
                >{`${content.p}`}</Typography>
              </Container>
            </>
          );
        })}
      </Container>
    </>
  );
}
