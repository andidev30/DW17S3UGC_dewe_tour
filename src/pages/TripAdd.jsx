import React from "react";
import Background from "../components/img/global/bg.png";
import { Container } from "react-bootstrap";
import Navbar from "../components/partials/baner/Navbar";
import Footer from "../components/section/Footer";

function TripAdd() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </div>
      <div style={{ background: "#E5E5E5" }}>tes</div>
      <Footer />
    </div>
  );
}

export default TripAdd;
