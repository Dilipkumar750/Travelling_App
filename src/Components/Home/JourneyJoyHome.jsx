import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import journey from '../../assets/JourneyJoy.jpeg';

const JourneyJoyHome = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${journey})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        padding: '50px 20px',
        borderRadius: '8px',
        backdropFilter: 'blur(30%)',
        minHeight: '100vh',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Row className="justify-content-center" style={{ backdropFilter: 'blur(70px)', marginTop: '-50%' }}>
          <Col md={6}>
            <h4 className="mb-3" style={{ fontFamily: 'Shojumaru', boxShadow: 'black' }}>
              JOURNEY JOY
            </h4>
            <p>Your Travel Companion, Anytime, Anywhere.</p>
          </Col>
        </Row>
      </Link>
    </Container>
  );
};

export default JourneyJoyHome;
