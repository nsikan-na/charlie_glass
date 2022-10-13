import React, { useEffect, useState } from "react";
import {
  MenuItem,
  Button,
  Container,
  Menu,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const { pathname } = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
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
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Box>
        {offset < 100 ? (
          <AppBar
            elevation={0}
            position="fixed"
            sx={[
              {
                backgroundColor: "rgba(0, 0, 0,0)",
                border: "0",
                boxShadow: "0",
              },
            ]}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        cursor: "pointer",
                      },
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
                    <MenuIcon sx={{ color: "white" }} />
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
                      component="a"
                      sx={{
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontWeight: 700,
                        color: "white",
                        textDecoration: "none",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
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
                            display: "block",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "none",
                            boxShadow: "none",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "white",
                              border: "none",
                              boxShadow: "none",
                              color: "#151E3E",
                            },
                          },
                        ]}
                      >
                        <Typography
                          variant="body1"
                          sx={[
                            {},
                            page.path === pathname && {
                              borderBottom: "1px solid white",
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
                  <Typography variant="body1">(718)-765-0087</Typography>
                </Stack>
              </Toolbar>
            </Container>
          </AppBar>
        ) : (
          <AppBar
            position="fixed"
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "#151E3E",
                      textDecoration: "none",
                      "&:hover": {
                        cursor: "pointer",
                      },
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
                            backgroundColor: "rgba(0, 0, 0, 0)",
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
        )}

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
                  326 50th st. brooklyn, NY 11220
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  INFO@CHARLIEGLASS.COM
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
            Services
          </Typography>
          <Stack
            justifyContent="space-evenly"
            alignItems="center"
            direction={{ xs: "column", sm: "row" }}
          >
            {[
              {
                title: "Glass Partitions",
                p: "With one of our most popular services, this brings out all of the different ways people want their offices to be designed.",
              },
              {
                title: "Storefronts",
                p: " When it comes to doing storefronts you want the most dedicated professional doing the job . When it comes to how you want your entrance to.",
              },
              {
                title: "Mirrors",
                p: " Our team dedicates to putting mirrors in bathrooms, gyms, indexs anywhere that a customer wants a mirror to be placed.",
              },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  sx={{ border: "none", boxShadow: "none", maxWidth: 345 }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      sx={{
                        color: "#5A5A5A",
                        fontWeight: "bold",
                      }}
                    >{`${content.title}`}</Typography>
                    <Typography
                      variant="body1"
                      sx={{ textIndent: "1rem" }}
                    >{`${content.p}`}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
