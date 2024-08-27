import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios
import LoginImage from '../assets/login image.png';
import { API_URL } from '../constant';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation after successful login

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/user/login`, {
        email,
        password
      });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/HomePage');
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="email" 
                value={email} 
                onChange={(e) => setemail(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>

            {error && <div className="text-danger mb-3">{error}</div>}

            <div className="mb-3 text-end">
              <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
            </div>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 mb-3" 
              style={{ backgroundColor: '#ff5f00', border: 'none' }}
            >
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
