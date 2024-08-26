import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs'; // Importing arrow icon from react-icons
import experience from '../../assets/experience.jpeg';

const Travel = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${experience})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        padding: '50px 20px', 
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '20px',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)', // Adjust the blur amount here
        marginBottom: '90%', // Adjusted to ensure space for the button
      }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <div>
              <h4 className="text-left mb-4">Travel & Experience</h4>
              <p>
                Immerse yourself in the world with personalized travel experiences curated just for you. From local attractions to unique cultural experiences, JourneyJoy connects you to the heart of every destination. Embark on a journey that goes beyond sightseeing, creating stories and memories that last a lifetime.
              </p>
            </div>
          </Col>
        </Row>
      </div>
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
        Get Started
        <BsArrowRight style={{ marginLeft: '10px' }} />
      </Button>
    </Container>
  );
}

export default Travel;
