import React from "react";
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
        src="/images/2.png"
        alt="First slide"
        height="350px"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,50%)",
        }}
      >
        <h3>Charlie Glass Inc.</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>326 50th st. brooklyn, NY 11220</p>
          <p>XXX.XXX.XXXX INFO@CHARLIEGLASS.COM</p>
        </div>
      </div>
    </div>
  );
}
