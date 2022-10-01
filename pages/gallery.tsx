import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function Gallery() {
  return (
    <>
      <Typography variant="h3" align="center">
        Gallery
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
            <>
              <Container style={{}}>
                <Typography
                  style={{ textAlign: "center" }}
                >{`${content.title}:`}</Typography>
                {[content.imgs].map((image, i) => {
                  return (
                    <img src={image[0]} height="250px" width="100%" key={i} />
                  );
                })}
              </Container>
            </>
          );
        })}
      </Container>
    </>
  );
}
