import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";

export default function Services() {
  const matches = useMediaQuery("(max-width:1400px)");
  return (
    <>
      <Box
        sx={[
          {},
          !matches && {
            width: "70%",
            margin: "auto",
          },
        ]}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ margin: "2rem" }}
          id="Services"
        >
          Services
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ textIndent: "2rem", margin: "auto", width: "70%" }}
        >
          Anything the customer desires our specialists are always there ensure
          that the customer is 100% satisfied.
        </Typography>
        <Grid
          container
          spacing={1}
          columns={{ xs: 4, sm: 8, md: 10 }}
        >
          {[
            {
              title: "Shower Doors",
              p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              img: "/ShowerDoors/1.jpg",
            },
            {
              title: "Shelves",
              p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              img: "/Shelves/1.jpg",
            },
            {
              title: "Glass Partition",
              p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              img: "/GlassPartition/1.jpg",
            },
            {
              title: "Storefronts",
              p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              img: "/ShowerDoors/1.jpg",
            },
          ].map((content, i) => {
            return (
              <Grid
                item
                sm={4}
                md={4}
                key={i}
                sx={{ textAlign: "center", margin: "auto" }}
              >
                <Card sx={{ margin: "1rem" }}>
                  <CardMedia
                    height="350px"
                    component="img"
                    image={content.img}
                    alt={content.title}
                  />
                  <CardContent
                    key={content.title}
                    sx={{
                      backgroundColor: "#151E3E",
                      color: "white",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >{`${content.title}`}</Typography>
                    <Typography
                      variant="body1"
                      sx={{ margin: "auto", width: "80%" }}
                    >{`${content.p}`}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
