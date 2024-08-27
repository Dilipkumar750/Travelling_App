import React from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Ticketcards from "../TicketCard";
import flight from "../../assets/flight-color.png";

const FlightDetails = () => {
  return (
<Container className="mt-1 mb-1 p-4 rounded" style={{ backgroundColor: '#F3E8D6' }}>
<div className="d-flex align-items-center mb-4">
        <Link to="/Homepage">
          <FaArrowLeft className="fs-4 me-3 text-warning" />
        </Link>
        <h2 className="text-dark">Flight Details</h2>
      </div>
      <Row className="justify-content-center">
        <Col md={8}>
          <Ticketcards color="red" width="100%" borderRadius="15%" />

          <Card className="p-3 mt-3 shadow-sm bg-white">
            <Row className="align-items-center mb-1">
              <Col className="text-center">
                <Button
                  variant="link"
                  className="text-danger border-2 border-white rounded-pill p-2 shadow-sm"
                >
                  CHE
                </Button>
                <p className="fs-6 mt-2">(Madras International Airport)</p>
              </Col>

              <Col className="text-center position-relative">
                <img src={flight} alt="flight" className="w-75" />
                <hr className="border-dashed border-black my-2" />
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle border-dashed border-warning" style={{ width: '120px', height: '60px', borderTopWidth: '2px', borderBottomWidth: '0' }} />
                <div className="position-absolute bottom-0 start-50 translate-middle-x rounded-bottom-50 border-dashed border-warning" style={{ width: '120px', height: '60px', borderBottomWidth: '2px', borderTopWidth: '0' }} />
              </Col>

              <Col className="text-center">
                <Button
                  variant="link"
                  className="text-danger border-2 border-white rounded-pill p-2 shadow-sm"
                >
                  BLR
                </Button>
                <p className="fs-6 mt-2">(Kempegowda International Airport)</p>
              </Col>
            </Row>

            <hr />

            <Row className="mb-3">
              <Col>
                <strong>Date</strong>
                <Form.Control type="date" defaultValue="2023-05-26" />
              </Col>
              <Col>
                <strong>Time</strong>
                <Form.Control type="time" defaultValue="08:30" />
              </Col>
            </Row>

            <hr />

            <Row className="mb-2">
              <Col><strong>Price</strong></Col>
              <Col className="text-end"><strong className="text-danger">₹ 1,700</strong></Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={8}>
          {/* Render Payment Methods Here */}
        </Col>
      </Row>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button
          className="w-100 py-2 rounded-pill"
          style={{backgroundColor: 'transparent', color: 'orange', border: '2px solid #f08e2d'}}
        >
          Cancel
        </Button>
        <Button
          className="w-100 py-2 rounded-pill"
          style={{backgroundColor: '#f08e2d'}}
        >
          Continue
        </Button>
      </div>
    </Container>
  );
};

export default FlightDetails;
