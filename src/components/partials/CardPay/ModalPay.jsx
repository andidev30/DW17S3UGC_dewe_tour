import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

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
          <Link to="/pay-pending">
            <Button variant="warning text-white" className="mx-2">
              Here
            </Button>
          </Link>
          thank you
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalPay;
