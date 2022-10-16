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
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { uniqueId } from "lodash";
export default function Services() {
  const matches = useMediaQuery("(max-width:1400px)");
  return (
    <>
      <Box
        sx={[
          {},
          !matches && {
            width: "70%",
            margin: "auto ",
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
          sx={{ textIndent: "2rem", margin: "2rem auto", width: "70%" }}
        >
          Anything the customer desires our specialists are always there ensure
          that the customer is 100% satisfied.
        </Typography>
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 10 }}>
          {[
            {
              title: "Shower Doors",
              list: ["Frameless", "Sliding doors", "All colors"],
              num: 3,
            },

            {
              title: "Glass Partition",
              list: ["1/2 inch glass", "Herculite", ""],
              num: 2,
            },
            {
              title: "Storefronts",
              list: [
                "Frameless storefronts",
                "Pocket tube storefronts",
                "Curtain wall system",
              ],
              num: 3,
            },
            {
              title: "Shelves",
              list: ["all needs", "", ""],
              num: 1,
            },
            {
              title: "Mirrors",
              list: ["Clear, bronze, grey, and black", "", ""],
              num: 1,
            },
          ].map((content, i) => {
            return (
              <Grid
                item
                sm={3}
                md={3}
                key={uniqueId()}
                sx={{ textAlign: "center", margin: "auto" }}
              >
                <Card sx={{ margin: "0 0 1rem", width: 285 }}>
                  <CardContent
                    key={uniqueId()}
                    sx={{
                      backgroundColor: "#AEACAC",
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
                          <ListItem key={uniqueId()}>
                            {item ? (
                              <ListItemIcon>
                                <CheckIcon style={{ color: "#151E3E" }} />
                              </ListItemIcon>
                            ) : (
                              <ListItemIcon>
                                <CheckIcon style={{ color: "#AEACAC" }} />
                              </ListItemIcon>
                            )}
                            <ListItemText
                              key={uniqueId()}
                              sx={{ color: "white", height: "50px" }}
                              primary={item}
                            />
                          </ListItem>
                          {arr.length - 1 !== t &&
                          item &&
                          t !== content.num - 1 ? (
                            <Divider
                              variant="middle"
                              key={uniqueId()}
                              sx={{
                                borderBottomWidth: "2",
                                backgroundColor: "#333333",
                              }}
                            />
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
