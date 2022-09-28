import React from "react";
export default function About() {
  return (
    <>
      <h1 className="h1">About Us</h1>
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ul style={{ width: "25%", margin: "0 auto" }}>
        {[
          { title: "Located at ", p: "326 50 st, Brooklyn, NY 11220" },
          { title: "Call us or email us at", p: "917-848-8128" },
          { title: "Open Monday-Friday", p: " 8am - 8pm" },
        ].map((content) => {
          return (
            <li>
              <div>{content.title}</div>
              <div>{content.p}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
