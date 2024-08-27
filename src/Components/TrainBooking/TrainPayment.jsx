import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import visa from "../../assets/visa.png";
import mastercard from "../../assets/maestro.png";
import paypal from "../../assets/paypal.png";
import phonepe from "../../assets/phonepe.png";

const TrainPayment = () => {
  return (
    <Container className="mt-4 mb-4">
      {/* Train Details Card */}
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Row className="d-flex align-items-center">
                <Col>
                  <h5>09:30 AM</h5>
                  <p>12 hrs</p>
                  <h5>09:30 PM</h5>
                </Col>
                <Col className="text-center">
                  <p><strong>CHE</strong></p>
                  <p><strong>KL</strong></p>
                </Col>
                <Col className="text-end">
                  <p><strong>WAG 7</strong></p>
                  <p><strong>₹ 1,500</strong></p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-end">
                  <h5>Total</h5>
                  <p><strong>₹ 1,500</strong></p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Payment Methods Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Row className="g-3">
            <Col md={6}>
              <Card className="bg-lightblue mb-3">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <img src={visa} alt="Visa" style={{ width: '50px' }} />
                  <p>*********0017</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-lightblue mb-3">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <img src={paypal} alt="PayPal" style={{ width: '50px' }} />
                  <p>*********0017</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-lightblue mb-3">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <img src={mastercard} alt="Maestro" style={{ width: '50px' }} />
                  <p>*********0017</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-lightblue mb-3">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <img src={phonepe} alt="PhonePe" style={{ width: '50px' }} />
                  <p>*********0017</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Continue Button */}
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Button
            style={{
              backgroundColor: '#f08e2d',
              border: 'none',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '10px 20px'
            }}
          >
            Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default TrainPayment;
