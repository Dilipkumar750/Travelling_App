import React from 'react';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap'; // Added Container, Row, Col for layout
import train from '../../assets/train.png';
import buses from '../../assets/bus.png';
import flight from '../../assets/flight.png';
import hotel from '../../assets/hotel.png';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';

const BookTickets = () => {
  const transportOptions = [
    { image: flight, title: 'Flights' },
    { image: hotel, title: 'Hotels' },
    { image: train, title: 'Trains' },
    { image: buses, title: 'Buses' },
  ];

  return (
    <>
      <Header />
      <Container style={{ padding: '20px', maxWidth: '600px', }}>
        {/* Search Bar */}
        <Form.Control style={{backgroundColor: '#F3E8D6'}}
          type="text"
          placeholder="Search"
          className="mb-3"
        />
        
        {/* Main Card */}
        <Card className="text-center mb-3" style={{ backgroundColor: '#F3E8D6' }}>
          <Card.Body>
            <Card.Title>Where will you go next?</Card.Title>
            <Card.Text style={{ fontSize: '14px' }}>
              Get inspired, plan, and book your travel with our expert recommendations and exclusive deals!
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Transport and Accommodation Button */}
        <div className="text-center mb-3">
          <Button style={{ backgroundColor: '#f08e2d', border: 'none' }}>
            Transport and Accommodation
          </Button>
        </div>

        {/* 2x2 Grid of Cards */}
        <Row>
          {transportOptions.map((option, index) => (
            <Col key={index} xs={6} className="mb-3">
              <Card style={{ borderRadius: '15px', textAlign: 'center', backgroundColor: '#F3E8D6' }}>
                <Card.Img
                  variant="top"
                  src={option.image}
                  style={{ width: '50%', height: 'auto', borderRadius: '15px', margin: 'auto', marginTop: '10%' }}
                />
                <Card.Body>
                  <Card.Title>{option.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BookTickets;
