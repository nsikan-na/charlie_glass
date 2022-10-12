import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Grid,
  Box,
  List,
  ListItem,
  useMediaQuery,
  Divider,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

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
          sx={{ margin: "2rem", color: "#151E3E" }}
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
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 10 }}>
          {[
            {
              title: "Shower Doors",
              list: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              ],
            },
            {
              title: "Shelves",
              list: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              ],
            },
            {
              title: "Glass Partition",
              list: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              ],
            },
            {
              title: "Storefronts",
              list: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              ],
            },
            {
              title: "Mirrors",
              list: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
              ],
            },
          ].map((content, i) => {
            return (
              <Grid
                item
                sm={3}
                md={3}
                key={i}
                sx={{ textAlign: "center", margin: "auto" }}
              >
                <Card sx={{ margin: "1rem" }}>
                  <CardContent
                    key={content.title}
                    sx={{
                      backgroundColor: "#5A5A5A",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#151E3E",
                      }}
                    >{`${content.title}`}</Typography>
                    <List>
                      {content.list.map((item, t, arr) => (
                        <>
                          <ListItem>
                            <ListItemIcon>
                              <CheckIcon style={{ color: "#151E3E" }} />
                            </ListItemIcon>
                            <ListItemText
                              key={t}
                              sx={{ color: "white" }}
                              primary={item}
                            />
                          </ListItem>
                          {arr.length - 1 !== t ? (
                            <>
                              {
                                <Divider
                                  variant="middle"
                                  sx={{
                                    borderBottomWidth: 2,
                                    backgroundColor: "#333333",
                                  }}
                                />
                              }
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
                    </List>
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
