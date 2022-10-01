import React, { useState, useEffect, createContext } from "react";
import { AppProps } from "next/app";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";
import Image from "next/image";
import Link from "next/link";

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
                variant="h6"
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
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              917-848-8128
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Component {...pageProps} />
      <Box
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        <img
          className=""
          src="/1.png"
          alt="First slide"
          height="10%"
          width="100%"
        />
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
              top: "10%",
              left: "50%",
              transform: "translate(-50%,20%)",
            }}
          >
            <Typography>GET A FREE ESTIMATE TODAY</Typography>

            <Typography>
              The all-in-one shop for all of your glass work desires is Charlie
              Glass. Together, we will design a layout that expressed your
              business, lifestyle, and creativity. We are ready to help you
              achieve your next project today.
            </Typography>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button variant="contained">Contact</Button>
            </Link>
          </Container>
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#1769aa", color: "white" }}>
        <Container>
          <Typography textAlign="center">Information</Typography>
          <Typography textAlign="center">
            326 50th st. brooklyn, NY 11220
          </Typography>
          <Typography textAlign="center">*Google Map Link*</Typography>
          <Typography textAlign="center">917-848-8128</Typography>
        </Container>
      </Box>
      <Box style={{ backgroundColor: "#1769aa", color: "white" }}>
        <Typography textAlign="left">copyright by Charlie Glass Inc</Typography>
      </Box>
    </Context.Provider>
  );
}
export default MyApp;