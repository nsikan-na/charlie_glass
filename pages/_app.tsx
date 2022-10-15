import React, { createContext, useEffect, useState } from "react";
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
  Chip,
  CssBaseline,
} from "@mui/material";
import "../styles/index.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
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
  const { pathname } = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const pages = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
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
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h5"
                      noWrap
                      component="a"
                      sx={[
                        {
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          fontWeight: 700,
                          letterSpacing: ".3rem",
                          color: "#151E3E",
                          textDecoration: "none",
                          "&:hover": {
                            cursor: "pointer",
                          },
                        },
                      ]}
                    >
                      Charlie Glass Inc.
                    </Typography>
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
                      {pages.map((page, i) => (
                        <MenuItem key={i} onClick={handleCloseNavMenu}>
                          <Link
                            href={page.path}
                            style={{ textDecoration: "none", color: "#151E3E" }}
                          >
                            <Typography textAlign="center">
                              {page.label}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Stack justifyContent="right">
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        variant="h5"
                        noWrap
                        textAlign="right"
                        component="a"
                        sx={[
                          {
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: "#151E3E",
                            textDecoration: "none",
                            "&:hover": {
                              cursor: "pointer",
                            },
                          },
                        ]}
                      >
                        Charlie Glass Inc.
                      </Typography>
                    </Link>
                  </Stack>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "5rem",
                    }}
                  >
                    {pages.map((page, i) => (
                      <Link
                        href={page.path}
                        style={{ textDecoration: "none" }}
                        key={i}
                      >
                        <Button
                          key={page.label}
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
              <img src="/1.png" alt="First slide" height="800px" width="100%" />
              <Box
                sx={{
                  background: "rgba(0, 0, 0, .6)",
                  width: "100%",
                  height: "99%",
                  position: "absolute",
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%,0%)",
                }}
              >
                <Container
                  sx={{
                    position: "absolute",
                    top: "20%",
                    left: "50%",
                    transform: "translate(-50%,30%)",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ margin: "1rem", fontWeight: "bold" }}
                  >
                    GET A FREE ESTIMATE TODAY
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ width: "70%", margin: "auto" }}
                  >
                    The all-in-one shop for all of your glass work desires is
                    Charlie Glass. Together, we will design a layout that
                    expresses your business, lifestyle, and creativity. We are
                    ready to help you achieve your next project today.
                  </Typography>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "1rem",
                        backgroundColor: "#151E3E",
                        "&:hover": {
                          backgroundColor: "#5A5A5A",
                        },
                      }}
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
                  <List key={content.title}>
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
