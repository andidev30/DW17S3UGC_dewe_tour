import React from "react";
import Navbar from "../components/partials/baner/Navbar";
import {Container} from "react-bootstrap"
import Background from "../components/img/global/bg.png"

function BookNow() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </div>
    </>
  );
}

export default BookNow;
