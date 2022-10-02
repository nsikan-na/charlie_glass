import React from "react";
import { Typography, Stack, Card, CardContent, CardMedia } from "@mui/material";

export default function Gallery() {
  return (
    <>
      <Typography variant="h3" align="center" style={{ margin: "1rem" }}>
        Gallery
      </Typography>
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
      >
        {[
          {
            title: "Shower Doors",
            imgs: ["/1.png", "/2.png"],
          },
          {
            title: "Shelves",
            imgs: ["/2.png"],
          },
          {
            title: "Glass Parition",
            imgs: ["/1.png"],
          },
          {
            title: "Storefronts",
            imgs: ["/2.png"],
          },
        ].map((content) => {
          return (
            <Card style={{}} key={content.title}>
              <CardContent>
                <Typography
                  variant="h5"
                  style={{ textAlign: "center" }}
                >{`${content.title}:`}</Typography>
                {[content.imgs].map((image, i) => {
                  return (
                    <CardMedia
                      key={i}
                      component="img"
                      image="1.png"
                      alt={content.title}
                    />
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}
