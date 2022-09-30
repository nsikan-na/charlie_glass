import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <>
      <Box
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        <img
          className=""
          src="/images/2.png"
          alt="First slide"
          height="350px"
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
            <Typography variant="h3">Charlie Glass Inc.</Typography>
            <Container>
              <Typography>326 50th st. brooklyn, NY 11220</Typography>
              <Typography>917-848-8128 INFO@CHARLIEGLASS.COM</Typography>
            </Container>
          </Container>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
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
            p: " Our team dedicates to putting mirrors in bathrooms, gyms, homes anywhere that a customer wants a mirror to be placed.",
          },
        ].map((content) => {
          return (
            <>
              <Container>
                <Typography
                  textAlign="center"
                  style={{
                    color: "#1769aa",
                    fontSize: "2rem",
                    fontWeight: "575",
                  }}
                >{`${content.title}`}</Typography>
                <Typography
                  style={{ color: "white" }}
                >{`${content.p}`}</Typography>
              </Container>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Home;
