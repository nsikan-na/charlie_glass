import React from "react";
export default function Services() {
  return (
    <>
      <h1 className="h1">Services</h1>
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {[
          {
            title: "Shower Doors",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
          {
            title: "Shelves",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
          {
            title: "Glass Parition",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
          {
            title: "Storefronts",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elite",
          },
        ].map((content) => {
          return (
            <>
              <div
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "1%",
                  margin: "3%",
                }}
              >
                <div style={{ textAlign: "center" }}>{`${content.title}:`}</div>
                <div style={{ textAlign: "center" }}>{`${content.p}`}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
