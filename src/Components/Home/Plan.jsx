import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs'; // Importing arrow icon from react-icons
import plan from '../../assets/plan.jpeg';
import { Link } from 'react-router-dom';

const Plan = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${plan})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        padding: '50px 20px', 
        borderRadius: '8px',
        backdropFilter: 'blur(30%)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '90%', 
      }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <div>
              <h4 className="text-left mb-4">Plan & Book</h4>
              <p>
              JourneyJoy simplifies your travel planning, making it easier than ever to book flights, hotels, and activities all in one place. No more juggling between apps or websites—organize your entire trip effortlessly. With just a few taps, secure your travel plans and focus on enjoying the journey ahead.              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Link to="/Travel" style={{ textDecoration: 'none' }}>
        <Button 
          style={{
            position: 'absolute',
            bottom: '40px', 
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '15px',
            padding: '10px 20px',
            backgroundColor: '#ff5f00',
            width: '50%',
            color: '#fff', // Ensure button text is visible against the background
            border: 'none',
          }}
        >
          Next
          <BsArrowRight style={{ marginLeft: '10px' }} />
        </Button>
      </Link>
    </Container>
  );
}

export default Plan;
