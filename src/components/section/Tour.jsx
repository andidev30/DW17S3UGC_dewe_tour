import React from "react";
import { Card, CardColumns, Container, Col, Row } from "react-bootstrap";
import GT1 from "../img/tour/1.png";
import GT2 from "../img/tour/2.png";
import GT3 from "../img/tour/3.png";
import GT4 from "../img/tour/4.png";
import GT5 from "../img/tour/5.png";
import GT6 from "../img/tour/6.png";

function Tour() {
  const tourData = [
    {
      id: 1,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT1,
    },
    {
      id: 2,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT2,
    },
    {
      id: 3,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT3,
    },
    {
      id: 4,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT4,
    },
    {
      id: 5,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT5,
    },
    {
      id: 6,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT6,
    },
  ];
  return (
    <div>
      <h2 className="mt-5 text-center">Group Tour</h2>
      <Container className="px-5 mt-3">
        <Row>
          <Col>
            <CardColumns>
              {tourData.map((td) => (
                <Card key={td.id}>
                  <Card.Img variant="top" src={td.img} className="p-1" />
                  <Card.Body>
                    <Card.Title>{td.title}</Card.Title>
                    <Card.Text>
                      <Row>
                        <Col className="text-warning">{td.price}</Col>
                        <Col className="text-right text-muted">{td.loc}</Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tour;
