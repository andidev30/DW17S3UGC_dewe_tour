// import React from 'react'
import React, { useState } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import logo from "../../img/global/Icon.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import P2 from "../../img/profile/p2.png";
import ProfileDropdown from "../dropdown/ProfileDropdown";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // const [isLogedIn, setLogin] = useState(true);
  const isLoggedIn = false;
  const [isProfileDropdown, setProfileDropdown] = useState(false);

  const showProfileDropdown = () => {
    setProfileDropdown(!isProfileDropdown);
  };

  const disableShowProfileDropdown = () => {
    setProfileDropdown(false);
  };

  return (
    <>
      <Row>
        <Col>
          <nav className="navbar navbar-expand navbar-dark bg-transparant">
            <img src={logo} alt="logo" />
            <div className="nav navbar-nav ml-auto">
              {!isLoggedIn && (
                <Col>
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
                </Col>
              )}
              {isLoggedIn && (
                <Col>
                  <Image
                    src={P2}
                    roundedCircle
                    onClick={() => showProfileDropdown()}
                    onScroll={() => disableShowProfileDropdown()}
                  />
                </Col>
              )}
              {isProfileDropdown && <ProfileDropdown />}
            </div>
          </nav>
        </Col>
        <ModalLogin show={show} onHide={() => setShow(false)} />
        <ModalRegister
          show={showRegister}
          onHide={() => setShowRegister(false)}
        />
      </Row>
    </>
  );
}

export default Navbar;
