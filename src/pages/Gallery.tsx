import React, { useState } from "react";
import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  ButtonGroup,
  Button,
  ImageList,
  ImageListItem,
  Grid,
  styled,
  Paper,
  useMediaQuery,
  Box,
} from "@mui/material";
import "../index.css";
export default function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const itemData: { title: string; img: string }[] = [];
  const matches = useMediaQuery("(min-width:600px)");

  for (let i = 1; i <= 16; i++) {
    itemData.push({
      title: "Glass Partition",
      img: `/GlassPartition/${i}.jpg`,
    });
  }
  for (let i = 1; i <= 2; i++) {
    itemData.push({
      title: "Shelves",
      img: `/Shelves/${i}.jpg`,
    });
  }
  for (let i = 1; i <= 3; i++) {
    itemData.push({
      title: "Store Fronts",
      img: `/StoreFronts/${i}.jpg`,
    });
  }
  for (let i = 1; i <= 4; i++) {
    itemData.push({
      title: "Shower Doors",
      img: `/ShowerDoors/${i}.jpg`,
    });
  }
  const matches2 = useMediaQuery("(max-width:1400px)");

  return (
    <>
      <Box
        sx={[
          {},
          !matches2 && {
            width: "70%",
            margin: "auto",
          },
        ]}
      >
        <Typography variant="h3" align="center" sx={{ margin: "1rem" }}>
          Gallery
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{ margin: "1rem" }}
        >
          <ButtonGroup
            sx={{ justifyContent: "evenly" }}
            orientation={`${matches ? `horizontal` : `vertical`}`}
          >
            {[
              "All",
              "Store Fronts",
              "Shelves",
              "Glass Partition",
              "Shower Doors",
            ].map((item, i) => (
              <Button
                key={i}
                sx={[
                  {},
                  filter !== item && {
                    backgroundColor: "white",
                    color: "blue",
                    border: "1px solid blue",
                  },
                  filter === item && { backgroundColor: "blue" },
                ]}
                variant="contained"
                onClick={() => setFilter(item)}
              >
                {item}
              </Button>
            ))}
          </ButtonGroup>
        </Stack>
        <Typography variant="h5" textAlign="center" sx={{ margin: "1rem" }}>
          {filter}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, xl: 16 }}
        >
          {itemData
            .filter((item) => {
              return filter === "All" ? item : item.title === filter;
            })
            .map((item) => (
              <Grid
                item
                sm={4}
                md={4}
                key={item.img}
                sx={{ textAlign: "center", margin: "auto" }}
              >
                <img
                  src={`${item.img}`}
                  alt={item.title}
                  width="275"
                  height="275"
                  loading="lazy"
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
