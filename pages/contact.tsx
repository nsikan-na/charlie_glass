import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Stack,
  useMediaQuery,
  FormControlLabel,
  Checkbox,
  Button,
  FormGroup,
  Alert,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [services, setServices] = useState<string[]>([]);
  const matches = useMediaQuery("(max-width:1400px)");
  const matches2 = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>({});
  const handleClose: any = (_: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleFormSubmit = async () => {
    setIsLoading(true);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phoneNumber, message, services }),
    });
    res.json().then((response) => {
      setData(response);
      handleClick();
    });
    setIsLoading(false);
  };

  return (
    <>
      <Box
        sx={[
          { color: "#151E3E" },
          !matches && {
            width: "70%",
            margin: "0 auto 3rem",
          },
        ]}
      >
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            iconMapping={{
              success: (
                <CheckCircleOutlineIcon
                  fontSize="inherit"
                  sx={{ color: "white" }}
                />
              ),
              error: (
                <ErrorOutlineOutlinedIcon
                  fontSize="inherit"
                  sx={{ color: "white" }}
                />
              ),
            }}
            onClose={handleClose}
            severity={data.success ? "success" : "error"}
            sx={[
              { width: "100%", marginTop: "4rem", color: "white" },
              data.success && { backgroundColor: "green" },
              !data.success && { backgroundColor: "red" },
            ]}
          >
            {data.success ? "Email Sent!" : data.errors}
          </Alert>
        </Snackbar>
        <Typography variant="h3" textAlign="center" sx={{ margin: "2rem" }}>
          Contact Us
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          sx={{}}
        >
          <Container
            sx={[
              {
                backgroundColor: "#151E3E",
                color: "white",
                padding: "4rem 0 4rem",
                margin: "1rem",
              },
              !matches2 && {
                width: "90%",
              },
            ]}
          >
            <Typography
              variant="body1"
              sx={{ width: "70%", margin: "auto", textIndent: "1rem" }}
            >
              Glass company that originated in 2003. We specialize in everything
              that has to do in glass; from a shower door to glass partitions.
              Anything the customer desires our specialists are always there
              ensure that the customer is 100% satisfied. Please contact us for
              all your glass needs.
            </Typography>
          </Container>
          <Container sx={[{ margin: "1rem" }]}>
            <TextField
              label="Name"
              sx={{ margin: ".5rem" }}
              size="small"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Stack direction={{ xs: "column", sm: "row" }}>
              <TextField
                label="Email"
                sx={{ margin: ".5rem" }}
                size="small"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                label="Phone Number"
                sx={{ margin: ".5rem" }}
                size="small"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </Stack>
            <Typography
              variant="body1"
              sx={{
                margin: "1rem 0 -.25rem 0",
              }}
              textAlign="left"
            >
              What service can our specialists provide you with today?
            </Typography>
            <FormGroup>
              <Stack
                direction={{ xs: "column", lg: "row" }}
                style={{ display: "flex", width: "80%" }}
                justifyContent="space-between"
              >
                {[
                  { label: "Shower Doors", name: "showerDoors" },
                  { label: "Shelves", name: "shelves" },
                  { label: "Store Fronts", name: "storeFronts" },
                ].map((content, i) => (
                  <FormControlLabel
                    key={i}
                    label={content.label}
                    control={<Checkbox />}
                    style={{ whiteSpace: "nowrap", width: "170px" }}
                    value={content.label}
                    onChange={(e) => {
                      //@ts-ignore
                      e.target.checked
                        ? //@ts-ignore
                          services.push(e.target.value)
                        : setServices(
                            services.filter(
                              //@ts-ignore
                              (service) => service !== e.target.value
                            )
                          );
                    }}
                  />
                ))}
              </Stack>
            </FormGroup>
            <FormGroup>
              <Stack
                direction={{ xs: "column", lg: "row" }}
                style={{ display: "flex", width: "80%" }}
                justifyContent="space-between"
              >
                {[
                  { label: "Glass Partition", name: "glassPartition" },
                  { label: "Mirrors", name: "mirrors" },
                  { label: "Other", name: "other" },
                ].map((content, i) => (
                  <FormControlLabel
                    key={i}
                    label={content.label}
                    control={<Checkbox />}
                    style={{ whiteSpace: "nowrap", width: "170px" }}
                    value={content.label}
                    onChange={(e) => {
                      //@ts-ignore
                      e.target.checked
                        ? //@ts-ignore
                          services.push(e.target.value)
                        : setServices(
                            services.filter(
                              //@ts-ignore
                              (service) => service !== e.target.value
                            )
                          );
                    }}
                  />
                ))}
              </Stack>
            </FormGroup>
            <TextField
              label="Messages"
              sx={{ width: "80%" }}
              minRows="4"
              multiline={true}
              size="small"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <br />
            {!isLoading ? (
              <Button
                variant="contained"
                sx={[
                  {
                    margin: "1rem auto",
                    backgroundColor: "#151E3E",
                    "&:hover": {
                      backgroundColor: "#5A5A5A",
                    },
                  },
                ]}
                onClick={handleFormSubmit}
              >
                Email Us
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={[
                  {
                    margin: "1rem auto",
                    backgroundColor: "#151E3E",
                  },
                ]}
                disabled
              >
                <CircularProgress size={20} sx={{ marginRight: "1rem" }} />
                Email Us
              </Button>
            )}
          </Container>
        </Stack>
      </Box>
    </>
  );
}
