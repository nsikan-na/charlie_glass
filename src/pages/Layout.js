import { Layout, Breadcrumb, Button } from "antd";
import React from "react";
import { Outlet, Link } from "react-router-dom";
const { Header, Footer, Content } = Layout;

export default function myLayout({ content }) {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            backgroundColor: "white",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <div>Charlie Glass Inc</div>
          </Link>
          <Breadcrumb>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((content) => {
              return (
                <Breadcrumb.Item>
                  <Link to={content.path}>{content.label}</Link>
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <div>call here(XXX-XXX-XXXX)</div>
        </Header>
        <Content>
          <Outlet />
        </Content>
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
            width="100%"
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
                The all-in-one shop for all of your glass work desires is
                Charlie Glass. Together, we will design a layout that expressed
                your business, lifestyle, and creativity. We are ready to help
                you achieve your next project today.
              </p>
              <Button variant="outline-primary">Contact</Button>
            </div>
          </div>
        </div>

        <Footer style={{ backgroundColor: "blue", color: "white" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h1 style={{ color: "white" }}>Information</h1>
              <div>326 50th st. brooklyn, NY 11220</div>
              <div>*Google Map Link*</div>
              <div>XXX-XXX-XXXX</div>
            </div>
          </div>
          <div>copyright by Charlie Glass Inc</div>
        </Footer>
      </Layout>
    </>
  );
}
