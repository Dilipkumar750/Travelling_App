import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LoginImage from '../assets/login image.png';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div style={{ textAlign: 'right', marginTop: '10%' }}>
            <button 
              onClick={toggleAdmin} 
              style={{ 
                marginBottom: '5px', 
                color: '#ff5f00', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '4px', 
                cursor: 'pointer', 
                fontWeight: 'bold' 
              }}
            >
              {isAdmin ? 'Admin' : 'User'}
            </button>
          </div>
          <img 
            src={LoginImage} 
            alt="login" 
            className="mb-4" 
            style={{ width: '170px', display: 'block', margin: 'auto', marginTop: '5%' }} 
          />
          <h2 className="text-left my-4">Login Details</h2>
          <Form>
            <Form.Group controlId="username" className="mb-3">
              <Form.Control type="text" placeholder="Username, email, or phone number" />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="mb-3 text-end">
              <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
            </div>

            <Button variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor: '#ff5f00', border: 'none' }}>
              Login
            </Button>

            <p className="text-center">
              No Account? <br />
              <Link to="/signup" className="text-decoration-none" style={{ color: '#ff5f00' }}>Sign Up</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
