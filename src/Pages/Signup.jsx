import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LoginImage from '../assets/login image.png';
import axios from 'axios';
import { API_URL } from '../constant';

const Signup = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [username, setUsername] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {

    if (conformPassword!==password) {
      return alert('wrong conform password')
    }

    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/user/register`, {
        username, password, email, contactNo
      });
      // console.log(response)
      navigate('/Login');
    } catch (err) {
      // console.log(err);
      setError('Register failed. Please check your credentials and try again.')
    }
  };


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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName" className="mb-3">
              <Form.Control required type="text" placeholder="Full Name" value={username} onChange={(e) => setUsername(e.target.value)}  />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Control required type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="number" className="mb-3">
              <Form.Control required type='number' placeholder="number" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="createPassword" className="mb-3">
              <Form.Control required type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="conformPassword" className="mb-3">
              <Form.Control required type="password" placeholder="conform Password" value={conformPassword} onChange={(e) => setConformPassword(e.target.value)} />
            </Form.Group>
            {/* {error && <div className="text-danger mb-3">{error}</div>} */}

            <Button variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor: '#ff5f00', border: 'none' }}>
              Sign Up
            </Button>

            <p className="text-center">
              Already Have an Account? <br />
              <Link to="/Login" className="text-decoration-none" style={{ color: '#ff5f00' }}>Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
