import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs'; // Importing arrow icon from react-icons
import welcome from '../../assets/welcome.jpeg';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${welcome})`,
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
        marginBottom: '90%', // Adjusted to ensure space for the button
      }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <div>
              <h4 className="text-left mb-4">Welcome to Journey Joy</h4>
              <p>
                Start your journey with JourneyJoy, your ultimate travel companion. Whether you're dreaming of a serene getaway or an adventurous escape, we’ve got you covered. Explore new destinations, discover hidden gems, and unlock experiences that turn every trip into a memorable adventure.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Link to="/plan" style={{ textDecoration: 'none' }}>
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

export default Welcome;
