import { Row, Col } from "antd";
const Home = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          width: "100%",
        }}
      >
        <img
          className=""
          src="/images/2.png"
          alt="First slide"
          height="350px"
          width="100%"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%,50%)",
          }}
        >
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>
            Charlie Glass Inc.
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>326 50th st. brooklyn, NY 11220</div>
            <div>XXX.XXX.XXXX INFO@CHARLIEGLASS.COM</div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "grey",
        }}
      >
        {[
          {
            title: "Glass Partitions",
            p: "With one of our most popular services ; this brings out all of the different ways people want their offices to be designed.",
          },
          {
            title: "Storefronts",
            p: " When it comes to doing storefronts you want the most dedicated professional doing the job . When it comes to how you want your entrance to.",
          },
          {
            title: "Mirrors",
            p: " Our team dedicates to putting mirrors in bathrooms,gyms,homes,anywhere that a customer wants a mirror to be placed.",
          },
        ].map((content) => {
          return (
            <>
              <div
                style={{
                  padding: "1%",
                  margin: "3%",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "blue",
                    fontSize: "1.75em",
                    fontWeight: "semibold",
                  }}
                >{`${content.title}:`}</div>
                <div
                  style={{ textAlign: "center", color: "white" }}
                >{`${content.p}`}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
