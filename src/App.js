import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebook, FaTwitter, FaTelegram, FaPhone } from "react-icons/fa";

import AboutMe from "./screens/AboutMe";
// import AboveNav from "./screens/AboveNav";
import Backends from "./screens/Backends";
import MobileApps from "./screens/MobileApps";
import WebApps from "./screens/WebApps";

//Style
import styles from "./Styles/Styles.module.css";

// Bloggs
import Blogs from "./screens/Blogs";

function App() {
  const footerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray",
    color: "white",
    padding: "6vh",
    marginTop: "2vm",
    rowGap: "2vh",
  };

  const socialStyle = {
    display: "flex",
    flexDirection: "row",
    color: "white",
    columnGap: "2vh",
  };

  const HeadingBackGround = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "gray",
    padding: "4vh",
    borderRadius: "2vh",
    justifyContent: "center",
    alignItems: "center",
  };

  const PageHeadingText = {
    fontSize: "30px",
    fontWeight: "bold",
    fontStyle: "italic",
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#aboutme">SOLOMIKE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#mobileapps">mobile</Nav.Link>
              <Nav.Link href="#webapps">web</Nav.Link>
              <Nav.Link href="#backends">backend</Nav.Link>
              <Nav.Link href="#blogs">blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div id="aboutme">
          <AboutMe />
        </div>
        <div id="mobileapps">
          <div style={HeadingBackGround}>Mobile App / React Native</div>
          <MobileApps />
        </div>
        <div id="webapps">
          <div style={HeadingBackGround}> Websites (React, HTML)</div>
          <WebApps />
        </div>
        <div id="backends">
          <div style={HeadingBackGround}> Backends (PHP, Django) </div>
          <Backends />
        </div>
        <div id="blogs">
          <div style={HeadingBackGround}>Blog Contents </div>
          <Blogs />
        </div>
      </Container>
      <div style={{ marginTop: "2vh" }}></div>
      <div style={footerStyle} className="d-flex justify-content-center">
        <div style={socialStyle}>
          <FaFacebook size="4vh" />
          <FaTwitter size="4vh" />
          <FaTelegram size="4vh" />
        </div>
        <div>
          <FaPhone size="2vh" /> +2519-35-811-576
        </div>
      </div>
    </>
  );
}

export default App;
