import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LoginImage from '../assets/login image.png';

const Signup = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <img 
            src={LoginImage} 
            alt="login" 
            className="mb-4" 
            style={{ width: '170px', display: 'block', margin: 'auto', marginTop: '25%' }} 
          />
          <h2 className="text-left my-4">Sign Up Details</h2>
          <Form>
            <Form.Group controlId="fullName" className="mb-3">
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="createPassword" className="mb-3">
              <Form.Control type="password" placeholder="Create Password" />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button as={Link} to="/login" variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor: '#ff5f00', border: 'none' }}>
              Sign Up
            </Button>

            <p className="text-center">
              Already Have an Account? <br />
              <Link to="/login" className="text-decoration-none" style={{ color: '#ff5f00' }}>Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
