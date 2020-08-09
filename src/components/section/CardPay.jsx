import React from "react";
import TitlePay from "../partials/CardPay/TitlePay";
import DescPay from "../partials/CardPay/DescPay";
import { Card, Button } from "react-bootstrap";
import DataPay from "../partials/CardPay/DataPay";
import ModalPay from "../partials/CardPay/ModalPay"

function CardPay() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="m-5 mx-5 p-5">
      <Card className="p-5">
        <TitlePay />
        <DescPay />
        <DataPay />
      </Card>
      <Button
        variant="warning text-white"
        className="mt-4 btn-lg float-right"
        onClick={() => setModalShow(true)}
      >
        Pay
      </Button>
      <ModalPay
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default CardPay;
