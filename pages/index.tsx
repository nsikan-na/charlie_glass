import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
        height="100vh"
        width="100%"
      >
        <img src="/2.png" alt="First slide" height="100%" width="100%" />
        <Box
          sx={{
            background: "rgba(0, 0, 0, .6)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translate(-50%,0%)",
          }}
        >
          <Container
            sx={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%,20%)",
            }}
          >
            <Typography
              variant="h3"
              sx={[
                {
                  marginBottom: "2rem",
                  fontWeight: "bold",
                },
              ]}
            >
              Charlie Glass Inc.
            </Typography>
            <Stack
              justifyContent="space-evenly"
              alignItems="center"
              direction={{ xs: "column", sm: "row" }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                326 50th st. Brooklyn, NY 11220
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                INFO@CHARLIEGLASSINC.COM
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box sx={{ margin: "5rem 0" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#151E3E",
            margin: "5rem 0 1rem 0",
          }}
          textAlign="center"
        >
          Our Services
        </Typography>
        <Container
          sx={[
            {
              margin: "1rem auto 2rem ",
              backgroundColor: "#151E3E",
              paddingTop: ".25rem",
              borderRadius: "25%",
            },
            !matches && { width: "15%" },
            matches && { width: "2%" },
          ]}
        ></Container>
        <Stack
          justifyContent="space-evenly"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
        >
          {[
            {
              title: "Glass Partitions",
              p: `With one of our most popular 
                services; this brings out all of the 
                different ways people want their
                 offices to be designed.`,
            },
            {
              title: "Storefronts",
              p: `You should get the most devoted specialists possible to handle your storefronts.
                When it comes to how you want your entrance to a bakery, deli, barbershop, etc.
                You can always ask for ideas or tell us how you want anything done so that it looks exactly as you imagined.`,
            },
            {
              title: "Mirrors",
              p: `Our team dedicates to putting mirrors
                in bathrooms, gyms, homes, anywhere
                that a customer wants a mirror to be placed.`,
            },
          ].map((content, i, arr) => {
            return (
              <>
                <Card
                  key={i}
                  sx={[
                    {
                      border: "none",
                      boxShadow: "none",

                      maxWidth: 345,
                    },
                    matches && { height: 250 },
                  ]}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      sx={{
                        color: "#151E3E",
                        fontWeight: "bold",
                      }}
                    >{`${content.title}`}</Typography>
                    <Typography
                      variant="body1"
                      sx={{ textIndent: "1rem" }}
                    >{`${content.p}`}</Typography>
                  </CardContent>
                </Card>
                {arr.length - 1 !== i && matches ? (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(161, 161, 161, 0.3)",
                      borderLeft: ".01px solid rgba(161, 161, 161, 0.3)",
                      height: "200px",
                    }}
                  ></div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Home;
