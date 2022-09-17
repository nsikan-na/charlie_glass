import React from "react";
import Button from "react-bootstrap/Button";
export default function index() {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        color: "white",
      }}
    >
      <img
        className="d-block w-100"
        src="/images/1.png"
        alt="First slide"
        height="350px"
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%,50%)",
        }}
      >
        <h3>GET A FREE ESTIMATE TODAY</h3>
        <div>
          <p>
            The all-in-one shop for all of your glass work desires is Charlie
            Glass. Together, we will design a layout that expressed your
            business, lifestyle, and creativity. We are ready to help you
            achieve your next project today.
          </p>
          <Button variant="outline-primary">Contact</Button>
        </div>
      </div>
    </div>
  );
}
