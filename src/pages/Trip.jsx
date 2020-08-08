import React from "react"
import Navbar from "../components/partials/baner/Navbar"
import { Container } from "reactstrap"
import Background from "../components/img/global/bg.png"
import TitleTrip from "../components/section/TitleTrip"
import Galeri from "../components/section/Galeri"
import InfoTrip from "../components/section/InfoTrip"
import Footer from "../components/section/Footer"
import Daun from "../components/img/global/daun.png";

function Trip() {
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
      <div style={{ background: "#E5E5E5"}}>
        <Container className="p-5">
            <TitleTrip />
            <Galeri />
            <InfoTrip />
        </Container>
      </div>
      <img src={Daun} style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        top: "207%",
        bottom: 0,
        right: 0
      }} alt="daun" />
      <Footer />
    </div>
  );
}

export default Trip;
