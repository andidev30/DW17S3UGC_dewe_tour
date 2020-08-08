// import React from 'react'
import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../../img/global/Icon.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <Row>
        <Col>
          <nav className="navbar navbar-expand navbar-dark bg-transparant">
            <img src={logo} alt="logo" />
            <div className="nav navbar-nav ml-auto">
              <Button
                variant="outline-light"
                className="mr-2"
                onClick={() => setShow(true)}
              >
                Login
              </Button>
              <Button
                variant="warning"
                className="text-white"
                onClick={() => setShowRegister(true)}
              >
                Register
              </Button>
            </div>
          </nav>
        </Col>
        <ModalLogin show={show} onHide={() => setShow(false)} />
        <ModalRegister show={showRegister} onHide={() => setShowRegister(false)} />
      </Row>
    </>
  );
}

export default Navbar;
