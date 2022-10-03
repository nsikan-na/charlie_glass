import React, { createContext, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

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
import "../index.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const Context = createContext({});
  const { pathname } = useLocation();

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
      {pathname !== "/" ? (
        <AppBar
          position="sticky"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "black",
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
                      <Link
                        to={page.path}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center">{page.label}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontWeight: 700,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Charlie Glass Inc.
                </Typography>
              </Link>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pages.map((page, i) => (
                  <Link
                    to={page.path}
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
                          color: "black",
                          display: "block",
                          backgroundColor: "white",
                          border: "none",
                          boxShadow: "none",
                          "&:hover": {
                            backgroundColor: "black",
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
                            borderBottom: "1px solid black",
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
      <Outlet />
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
              <Typography variant="h4" sx={{ margin: "1rem" }}>
                GET A FREE ESTIMATE TODAY
              </Typography>

              <Typography variant="body1" sx={{ width: "70%", margin: "auto" }}>
                The all-in-one shop for all of your glass work desires is
                Charlie Glass. Together, we will design a layout that expressed
                your business, lifestyle, and creativity. We are ready to help
                you achieve your next project today.
              </Typography>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    backgroundColor: "#151E3E",
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
            { title: "Open Monday-Friday", p: " 8am - 5pm" },
          ].map((content) => {
            return (
              <List key={content.title}>
                <ListItem>
                  <ListItemText
                    sx={{ textAlign: "center" }}
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
            sx={{ color: "white", backgroundColor: "#151E3E" }}
          />
        </Stack>
      </Box>
    </Context.Provider>
  );
}
export default Layout;
