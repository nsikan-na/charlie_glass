import React, { createContext, useEffect } from "react";
import { AppProps } from "next/app";
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
} from "@mui/material";

import "../global.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ContactForm from "../components/contactForm";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const Context = createContext({});
  const router = useRouter();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Context.Provider value={{}}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Charlie Glass Inc.
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                    <Link href={page.path} style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">{page.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Charlie Glass Inc.
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, i) => (
                <Link
                  href={page.path}
                  style={{ textDecoration: "none" }}
                  key={i}
                >
                  <Button
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography variant="body1">{page.label}</Typography>
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* <Typography variant="body1">Call here (917-848-8128)</Typography> */}
              <Typography variant="body1">Call here (917-848-8128)</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Component {...pageProps} />
      {router.pathname !== "/contact" ? (
        <Box
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
          }}
        >
          <img src="/1.png" alt="First slide" height="600px" width="100%" />
          <Box
            style={{
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
              style={{
                position: "absolute",
                top: "1%",
                left: "50%",
                transform: "translate(-50%,20%)",
              }}
            >
              <Typography variant="h5">GET A FREE ESTIMATE TODAY</Typography>

              <Typography variant="body2">
                The all-in-one shop for all of your glass work desires is
                Charlie Glass. Together, we will design a layout that expressed
                your business, lifestyle, and creativity. We are ready to help
                you achieve your next project today.
              </Typography>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button variant="contained" style={{ marginTop: "1rem" }}>
                  Contact
                </Button>
              </Link>
              {/* <ContactForm /> */}
            </Container>
          </Box>
        </Box>
      ) : (
        ""
      )}

      <Box style={{ backgroundColor: "#1769aa", color: "white" }}>
        <Container style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <Typography textAlign="center">
            326 50th st. brooklyn, NY 11220
          </Typography>
          <Typography textAlign="center">917-848-8128</Typography>
          <Typography textAlign="center" style={{ marginLeft: "1rem" }}>
            Copyright by Charlie Glass Inc.
          </Typography>
        </Container>
      </Box>
    </Context.Provider>
  );
}
export default MyApp;
