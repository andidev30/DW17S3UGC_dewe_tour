import React from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container } from "react-bootstrap";
import Background from "../components/img/global/bg.png";
import Footer from "../components/section/Footer";
import CardPay from "../components/section/CardPay";

function PayPending() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </div>

        <CardPay />
        <br/>
      <Footer />
    </div>
  );
}

export default PayPending;