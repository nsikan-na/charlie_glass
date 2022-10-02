import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent, Stack } from "@mui/material";
const index = () => {
  return (
    <>
      <Box
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        <img src="/2.png" alt="First slide" height="350px" width="100%" />
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
                917-848-8128 INFO@CHARLIEGLASS.COM
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
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
            <Card sx={{ maxWidth: 345 }} key={i}>
              <CardContent>
                <Typography
                  variant="h5"
                  textAlign="center"
                  style={{
                    color: "#1769aa",
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
    </>
  );
};

export default index;
