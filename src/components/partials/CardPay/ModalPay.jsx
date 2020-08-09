import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalPay(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Your payment will be confirmed within 1 x 24 hours To see orders click
          <Button variant="warning">Here</Button> thank you
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalPay;
