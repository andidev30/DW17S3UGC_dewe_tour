import React from "react";
import Background from "../components/img/global/bg.png";
import { Container } from "react-bootstrap";
import Navbar from "../components/partials/baner/Navbar";
import Footer from "../components/section/Footer";
import DataTransaction from "../components/partials/transaction/DataTransaction";

function Transaction() {
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
      <h4
        className="font-weight-bold mt-5"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        Incoming Transaction
      </h4>
      <DataTransaction />
      <Footer />
    </div>
  );
}

export default Transaction;
