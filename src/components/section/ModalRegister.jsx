import React, { useState } from "react"
import { Button, Modal, ModalTitle, Form } from "react-bootstrap"
import './Styles.css'

function ModalLogin() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <ModalTitle className="text-center mt-4 font-weight-bold">Register</ModalTitle>
          <Form className="p-3 mx-5">
            <Form.Group controlId="formBasicName">
              <Form.Label className="m-title">Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail"  className="mt-4">
              <Form.Label className="m-title">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label className="m-title">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="mt-4">
              <Form.Label className="m-title">Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Button variant="warning" className="btn btn-block text-white font-weight-bold mt-4" type="submit">
              Submit
            </Button>
          </Form>
          <div className="text-center">
            <small className="text-muted text-center">have an account? ? Klik Here</small>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLogin;
