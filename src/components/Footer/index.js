import React from "react";
import Container from "react-bootstrap/Container";
export default function index() {
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <h1>Information</h1>
            <div>326 50th st. brooklyn, NY 11220</div>
            <div>*Google Map Link*</div>
            <div>XXX-XXX-XXXX</div>
          </div>
        </div>
        <div>copyright by Charlie Glass Inc</div>
      </Container>
    </div>
  );
}
