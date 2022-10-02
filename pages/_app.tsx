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
  List,
  ListItem,
  ListItemText,
  Stack,
  Card,
  Chip,
  CssBaseline,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../global.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ContactForm from "../components/contactForm";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const Context = createContext({});
  const router = useRouter();
  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Context.Provider value={{}}>
      <CssBaseline />
      {router.pathname !== "/" ? (
        <AppBar
          position="sticky"
          style={{ backgroundColor: "white", color: "black" }}
        >
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
                  style={{}}
                  component="a"
                  href=""
                  sx={{
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
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                style={{ justifyContent: "center", alignItems: "center" }}
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
                      sx={{ my: 2, color: "white", display: "block" }}
                      className="nav"
                    >
                      <Typography
                        variant="body1"
                        className={` ${
                          page.path === router.pathname ? "selectedNav" : ""
                        }`}
                      >
                        {page.label}
                      </Typography>
                    </Button>
                  </Link>
                ))}
              </Box>
              <Stack
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                alignItems="flex-end"
              >
                <Typography variant="body1">Call here</Typography>
                <Typography variant="body1">(917-848-8128)</Typography>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        ""
      )}
      <Component {...pageProps} />
      {router.pathname !== "/contact" ? (
        <Box
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
            margin: "1rem 0 0 0",
          }}
        >
          <img src="/1.png" alt="First slide" height="400px" width="100%" />
          <Box
            style={{
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
              style={{
                position: "absolute",
                top: "1%",
                left: "50%",
                transform: "translate(-50%,30%)",
              }}
            >
              <Typography variant="h5">GET A FREE ESTIMATE TODAY</Typography>

              <Typography
                variant="body2"
                style={{ width: "70%", margin: "auto" }}
              >
                The all-in-one shop for all of your glass work desires is
                Charlie Glass. Together, we will design a layout that expressed
                your business, lifestyle, and creativity. We are ready to help
                you achieve your next project today.
              </Typography>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  className="unSelected"
                  variant="contained"
                  style={{ marginTop: "1rem" }}
                >
                  Contact Us
                </Button>
              </Link>
              {/* <ContactForm /> */}
            </Container>
          </Box>
        </Box>
      ) : (
        ""
      )}

      <Box
        style={{
          backgroundColor: "blue",
          color: "white",
          paddingBottom: "1rem",
        }}
      >
        <Stack
          justifyContent="space-evenly"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
        >
          {[
            { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
            { title: "Call us or email us at", p: "917-848-8128" },
            { title: "Open Monday-Friday", p: " 8am - 8pm" },
          ].map((content) => {
            return (
              <List key={content.title}>
                <ListItem>
                  <ListItemText
                    style={{ textAlign: "center" }}
                    primary={
                      <Typography variant="body1">{content.title}</Typography>
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
        <Stack justifyContent="center" alignItems="center" textAlign="center">
          <Chip
            icon={<CopyrightIcon style={{ color: "white" }} />}
            label="Charlie Glass Inc."
            style={{ color: "white", backgroundColor: "blue" }}
          />
        </Stack>
      </Box>
    </Context.Provider>
  );
}
export default MyApp;
