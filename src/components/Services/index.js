import React from "react";
import Container from "react-bootstrap/Container";
export default function index() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <h2 >Glass Partitions</h2>
            <p >
              With one of our most popular services ; this brings out all of the
              different ways people want their offices to be designed .
            </p>
          </div>
          <div>
            <h2 >Storefronts</h2>
            <p >
              When it comes to doing storefronts you want the most dedicated
              professional doing the job . When it comes to how you want your
              entrance to.
            </p>
          </div>
          <div>
            <h2 >Mirrors</h2>
            <p >
              Our team dedicates to putting mirrors in bathrooms , gyms , homes
              , anywhere that a customer wants a mirror to be placed .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
