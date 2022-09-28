import React from "react";
export default function Gallery() {
  return (
    <>
      <h1 className="h1">Gallery</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {[
          {
            title: "Shower Doors",
            imgs: ["/images/1.png"],
          },
          {
            title: "Shelves",
            imgs: ["/images/2.png"],
          },
          {
            title: "Glass Parition",
            imgs: ["/images/1.png"],
          },
          {
            title: "Storefronts",
            imgs: ["/images/2.png"],
          },
        ].map((content) => {
          return (
            <>
              <div style={{}}>
                <div style={{ textAlign: "center" }}>{`${content.title}:`}</div>
                {[content.imgs].map((img) => {
                  return <img src={img} height="250px" width="100%" />;
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
