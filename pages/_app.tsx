import React, { createContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  Button,
  Container,
  Menu,
  Typography,
  Toolbar,
  Box,
  AppBar,
  List,
  ListItem,
  ListItemText,
  Stack,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import "../styles/index.css";
import Link from "next/link";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { uniqueId } from "lodash";
import Head from "next/head";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h2: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h3: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h4: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h5: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    h6: {
      fontFamily: ["Roboto Condensed"].join(","),
    },
    body1: {
      fontFamily: ["Barlow"].join(","),
      fontSize: "1.15rem",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const Context = createContext({});
  const matches = useMediaQuery("(min-width:500px)");
  const matches3 = useMediaQuery("(max-width:500px)");
  const matches2 = useMediaQuery("(max-width:1400px)");
  const { pathname } = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <Head>
        <title>Charlie Glass Inc</title>
        <meta name="description" content="Charlie Glass Inc" key="desc" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Charlie Glass Inc" />
        <meta property="og:description" content="Charlie Glass Inc" />
        <meta property="og:image" content="/titleicon.png" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link rel="icon" href="/titleicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Context.Provider value={{}}>
          {pathname !== "/" ? (
            <AppBar
              position="sticky"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Link
                    href="/"
                    style={{ textDecoration: "none" }}
                    passHref={true}
                  >
                    <Box
                      component="img"
                      src="/logo2.png"
                      alt="Charlie Glass Inc."
                      width={"15%"}
                      height={"15%"}
                      sx={[
                        { margin: ".5rem", display: "flex", cursor: "pointer" },
                        matches2 && { display: "none" },
                      ]}
                    />
                  </Link>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon sx={{ color: "#151E3E" }} />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={uniqueId()} onClick={handleCloseNavMenu}>
                          <Link
                            href={page.path}
                            style={{
                              textDecoration: "none",
                              color: "#151E3E",
                            }}
                            passHref={true}
                          >
                            <Typography textAlign="center">
                              {page.label}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Box
                      component="img"
                      src="/logo2small.png"
                      alt="Charlie Glass Inc."
                      width={"15%"}
                      height={"80%"}
                      sx={[
                        {
                          margin: ".5rem",
                          display: "none",
                          cursor: "pointer",
                        },
                        matches2 && { display: "flex" },
                        !matches3 && {
                          width: "5%",
                          height: "5%",
                        },
                      ]}
                    />
                  </Link>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "5rem",
                    }}
                  >
                    {pages.map((page) => (
                      <Link
                        href={page.path}
                        style={{ textDecoration: "none" }}
                        key={uniqueId()}
                      >
                        <Button
                          variant="contained"
                          onClick={handleCloseNavMenu}
                          sx={[
                            {
                              my: 2,
                              color: "#151E3E",
                              display: "block",
                              backgroundColor: "white",
                              border: "none",
                              boxShadow: "none",
                              "&:hover": {
                                backgroundColor: "#151E3E",
                                border: "none",
                                boxShadow: "none",
                                color: "white",
                              },
                            },
                          ]}
                        >
                          <Typography
                            variant="body1"
                            sx={[
                              {},
                              page.path === pathname && {
                                borderBottom: "1px solid #151E3E",
                              },
                            ]}
                          >
                            {page.label}
                          </Typography>
                        </Button>
                      </Link>
                    ))}
                  </Box>
                  <Stack
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      color: "#151E3E",
                    }}
                    alignItems="flex-end"
                  >
                    <Typography variant="body1">Call here</Typography>
                    <Typography variant="body1">(718)-765-0087</Typography>
                  </Stack>
                </Toolbar>
              </Container>
            </AppBar>
          ) : (
            ""
          )}
          <Component {...pageProps} />
          {pathname !== "/contact" ? (
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                color: "white",
                margin: "1rem 0 0 0",
              }}
            >
              <img src="/1.png" alt="First slide" height="400px" width="100%" />
              <Box
                sx={{
                  background: "rgba(0, 0, 0, .6)",
                  width: "100%",
                  height: "98%",
                  position: "absolute",
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%,0%)",
                }}
              >
                <Container
                  sx={[
                    {
                      position: "absolute",
                      top: "20%",
                      left: "50%",
                    },
                    !matches && {
                      transform: "translate(-50%,-20%)",
                    },
                    matches && { transform: "translate(-50%,-10%)" },
                  ]}
                >
                  <Typography
                    variant="h4"
                    sx={[
                      {
                        margin: "4rem 0 0",
                        fontWeight: "bold",
                      },
                      !matches && { fontSize: "1.5rem" },
                    ]}
                  >
                    GET A FREE ESTIMATE TODAY
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={[
                      { width: "90%", margin: "auto" },
                      !matches && { fontSize: "1rem" },
                    ]}
                  >
                    The all-in-one shop for all of your glass work desires is
                    Charlie Glass. Together, we will design a layout that
                    expresses your business, lifestyle, and creativity. We are
                    ready to help you achieve your next project today.
                  </Typography>
                  <Link
                    href="/contact"
                    style={{ textDecoration: "none" }}
                    passHref={true}
                  >
                    <Button
                      variant="contained"
                      sx={[
                        {
                          marginTop: "1rem",

                          backgroundColor: "#151E3E",
                          "&:hover": {
                            backgroundColor: "#5A5A5A",
                          },
                        },
                        !matches && {
                          fontSize: ".75rem",
                        },
                      ]}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </Container>
              </Box>
            </Box>
          ) : (
            ""
          )}

          <Box
            sx={{
              backgroundColor: "#151E3E",
              color: "white",
              paddingBottom: "1rem",
              marginTop: "-1rem",
            }}
          >
            <Stack
              justifyContent="space-evenly"
              alignItems="center"
              direction={{ xs: "column", sm: "row" }}
            >
              {[
                { title: "Located at ", p: "326 50th st. Brooklyn, NY 11220" },
                { title: "Call Us", p: "(718)-765-0087" },
                { title: "Email @", p: "info@charlieglassinc.com" },
                { title: "Open Monday-Friday", p: " 8am - 5pm" },
              ].map((content) => {
                return (
                  <List key={uniqueId()}>
                    <ListItem>
                      <ListItemText
                        sx={{ textAlign: "center" }}
                        primary={
                          <Typography variant="body1">
                            {content.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2">{content.p}</Typography>
                        }
                      ></ListItemText>
                    </ListItem>
                  </List>
                );
              })}
            </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              style={{ fontSize: ".9rem" }}
            >
              Copyright ©️ 2022 Charlie Glass - All Rights Reserved.
            </Stack>
          </Box>
        </Context.Provider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
