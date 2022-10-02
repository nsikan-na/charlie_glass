import React from "react";
import { Card, Typography, CardContent, Stack, CardMedia } from "@mui/material";

export default function Services() {
  return (
    <>
      <Typography variant="h3" textAlign="center" style={{ margin: "1rem" }}>
        Services
      </Typography>
      <Typography
        variant="body1"
        style={{ textIndent: "2rem", margin: "auto", width: "70%" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
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
            <Card style={{ margin: "1%" }}>
              <CardMedia component="img" image="1.png" alt={content.title} />
              <CardContent
                key={content.title}
                style={{
                  backgroundColor: "#1769aa",
                  color: "white",
                }}
              >
                <Typography
                  variant="h5"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >{`${content.title}:`}</Typography>
                <Typography
                  variant="body1"
                  style={{ margin: "auto", width: "80%" }}
                >{`${content.p}`}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}
