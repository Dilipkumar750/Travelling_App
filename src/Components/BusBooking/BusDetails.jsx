import React from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure this is imported if using Link
import { FaArrowLeft } from 'react-icons/fa'; // Ensure this is imported if using FaArrowLeft
import Ticketcards from "../TicketCard";
import bus from "../../assets/bus-color.png"; // Replace with your image path

const BusDetails = () => {
  return (
    <Container className="mt-1 mb-1" style={{ backgroundColor: '#ffe6e6', padding: '20px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px',  }}>
        <Link to="/Homepage">
          <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black' }}>Bus Details</h2>
      </div>
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Ticket Card */}
          <Ticketcards color="red" width="100%" borderRadius="15%" />

          {/* Ticket Details Card */}
          <Card style={{ padding: '15px', backgroundColor: '#FFFFFF', marginTop: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>

            {/* From and To with Dashed Line */}
            <Row className="align-items-center mb-3">
              <Col className="d-flex flex-column align-items-center">
                <Button
                  variant="link"
                  style={{
                    color: 'red',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: '5px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  CHE
                </Button>
                <p style={{ fontSize: '15px', margin: '5px 0 0 0' }}>(Koyambedu)</p>
              </Col>

              <Col className="text-center" style={{ position: 'relative' }}>
                <img src={bus} alt="bus" style={{ width: '70%' }} />
                <hr style={{ borderTop: '3px dashed black', margin: '10px 0' }} />
              </Col>

              <Col className="d-flex flex-column align-items-center">
                <Button
                  variant="link"
                  style={{
                    color: 'red',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: '5px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  BLR
                </Button>
                <p style={{ fontSize: '15px', margin: '5px 0 0 0' }}>(Electronic_City)</p>
              </Col>
            </Row>

            {/* Horizontal Line */}
            <hr />

            {/* Date and Time Input */}
            <Row className="mb-3 d-flex">
              <Col className="d-flex flex-column">
                <strong>Date</strong>
                <Form.Control type="date" defaultValue="2023-05-26" />
              </Col>
              <Col className="d-flex flex-column">
                <strong>Time</strong>
                <Form.Control type="time" defaultValue="08:30" />
              </Col>
            </Row>

            {/* Horizontal Line */}
            <hr />

            {/* Price Display */}
            <Row className="mb-2">
              <Col><strong>Price</strong></Col>
              <Col className="text-end"><strong style={{ color: 'red' }}>₹ 1,700</strong></Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Payment Section */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Row className="g-0">
            {/* Render Payment Methods Here */}
          </Row>
        </Col>
      </Row>

      {/* Continue and Cancel Buttons */}
      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button
          style={{
            width: '100%',
            height: '40px',
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'transparent',
            color: 'orange',
            border: '2px solid orange'
          }}
        >
          Cancel
        </Button>
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
      </div>
    </Container>
  );
};

export default BusDetails;
