import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useMediaQuery,
  MenuItem,
  Button,
  Menu,
  AppBar,
  Stack,
  Toolbar,
} from "@mui/material";
import { uniqueId } from "lodash";
import { useRouter } from "next/router";
import Link from "next/link";
const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const matches2 = useMediaQuery("(max-width:1400px)");
  const [offset, setOffset] = useState(0);
  const { pathname } = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const pages = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
                <Link
                  href="/"
                  style={{ textDecoration: "none" }}
                  passHref={true}
                >
                  <Box
                    component="img"
                    src="/logo1.png"
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
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    justifyContent: "space-between",
                  }}
                >
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
                    {pages.map((page) => (
                      <MenuItem key={uniqueId()} onClick={handleCloseNavMenu}>
                        <Link
                          href={page.path}
                          style={{ textDecoration: "none", color: "#151E3E" }}
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
                <Link
                  href="/"
                  style={{ textDecoration: "none" }}
                  passHref={true}
                >
                  <Box
                    component="img"
                    src="/logo1small.png"
                    alt="Charlie Glass Inc."
                    width={"15%"}
                    height={"15%"}
                    sx={[
                      { margin: ".5rem", display: "none", cursor: "pointer" },
                      matches2 && { display: "flex" },
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
                    {pages.map((page) => (
                      <MenuItem key={uniqueId()} onClick={handleCloseNavMenu}>
                        <Link
                          href={page.path}
                          style={{ textDecoration: "none", color: "#151E3E" }}
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
                <Link
                  href="/"
                  style={{ textDecoration: "none" }}
                  passHref={true}
                >
                  <Box
                    component="img"
                    src="/logo2small.png"
                    alt="Charlie Glass Inc."
                    width={"15%"}
                    height={"15%"}
                    sx={[
                      { margin: ".5rem", display: "none", cursor: "pointer" },
                      matches2 && { display: "flex" },
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
            sx={[{}, !matches2 && { width: "70%", margin: "auto" }]}
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
                    key={uniqueId()}
                    sx={[
                      {
                        border: "none",
                        boxShadow: "none",

                        maxWidth: 345,
                      },
                      matches && { height: 300 },
                    ]}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        textAlign="center"
                        sx={{
                          color: "#151E3E",
                          fontWeight: "bold",
                          marginBottom: "1rem",
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
                      key={uniqueId()}
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
      </Box>
    </>
  );
};

export default Home;
