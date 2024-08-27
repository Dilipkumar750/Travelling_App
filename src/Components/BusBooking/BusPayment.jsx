import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import visa from "../../assets/visa.png";
import mastercard from "../../assets/maestro.png";
import paypal from "../../assets/paypal.png";
import phonepe from "../../assets/phonepe.png";
import Ticketcards from "../TicketCard";
import bus from "../../assets/bus-color.png";

const paymentMethods = [
  { img: visa, alt: "Visa" },
  { img: paypal, alt: "PayPal" },
  { img: mastercard, alt: "Maestro" },
  { img: phonepe, alt: "PhonePe" },
];

const BusPayment = () => {
  return (
    <Container className="mt-1 mb-4" style={{ padding: '25px', backgroundColor: '#F3E8D6' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Link to="/Homepage">
          <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black' }}>Payment</h2>
      </div>

      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Ticketcards color='red' image={bus} width='100px' borderRadius='15px' />
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card className="mb-2" style={{ backgroundColor: '#FAD1D1', padding: '15px' }}>
            <Row className="d-flex justify-content-between align-items-center">
              <Col><strong>Total</strong></Col>
              <Col className="text-end"><strong>₹ 1,500</strong></Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <h4 className="mt-4">Payment</h4>

      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Row className="g-0">
            {paymentMethods.map((method, index) => (
              <Col md={6} key={index}>
                <Card className="bg-lightblue mb-2">
                  <Card.Body
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      backgroundColor: 'lightblue',
                      height: '60px',
                      padding: '10px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img src={method.img} alt={method.alt} style={{ width: '50px' }} />
                    <p>*********0017</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <Button
            style={{
              backgroundColor: '#f08e2d',
              width: '100%',
              height: '40px',
              padding: '10px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BusPayment;
