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
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const index = () => {
  const [offset, setOffset] = useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const router = useRouter();
  const [scroll, setScroll] = useState<boolean>(false);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
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
            className={`${scroll ? "" : ""}`}
            style={{
              backgroundColor: "rgba(0, 0, 0,0)",
              border: "0",
              boxShadow: "0",
            }}
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
                        <Link
                          href={page.path}
                          style={{ textDecoration: "none" }}
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
                        className="navOther"
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
          <AppBar
            position="fixed"
            className={`${scroll ? "" : ""}`}
            style={{ backgroundColor: "white", color: "black" }}
            onScroll={() => setScroll(true)}
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
                        <Link
                          href={page.path}
                          style={{ textDecoration: "none" }}
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
        )}
        <Box
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
          }}
          height="100vh"
          width="100%"
        >
          <img src="/2.png" alt="First slide" height="100%" width="100%" />
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
                top: "35%",
                left: "50%",
                transform: "translate(-50%,20%)",
              }}
            >
              <Typography
                variant="h3"
                style={{ marginBottom: "2rem", fontWeight: "bold" }}
              >
                Charlie Glass Inc.
              </Typography>
              <Stack
                justifyContent="space-evenly"
                alignItems="center"
                direction={{ xs: "column", sm: "row" }}
              >
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  326 50th st. brooklyn, NY 11220
                </Typography>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  INFO@CHARLIEGLASS.COM
                </Typography>
              </Stack>
            </Container>
          </Box>
        </Box>
        <Stack
          justifyContent="space-evenly"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          style={{ margin: "2rem 0" }}
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
                sx={{ maxWidth: 345 }}
                key={i}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >{`${content.title}`}</Typography>
                  <Typography
                    variant="body1"
                    style={{ textIndent: "1rem" }}
                  >{`${content.p}`}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default index;
