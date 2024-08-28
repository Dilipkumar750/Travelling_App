import React from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import profile from '../assets/profile.webp'

const Profile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <Header title='Profile' arrow={false}/>
      <Container className="mt-4 mb-4 flex-grow-1">
        {/* Centered Profile Information */}
        <Row className="justify-content-center text-center mb-4">
          <Col xs="auto">
            <Image src={profile} alt="Profile" fluid roundedCircle className="mb-3" style={{ width: '35%', height: '55%', objectFit: 'cover' }} />
            <h2>John</h2>
            <p>john@gmail.com</p>
          </Col>
        </Row>

        {/* Profile Form */}
        <Form>
          {/* First Name */}
          <Form.Group controlId="formFirstName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="First Name"
              className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group controlId="formLastName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Last Name"
              className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
            />
          </Form.Group>

          {/* Phone Number */}
          <Form.Group controlId="formPhoneNumber" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Phone Number"
              className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
            />
          </Form.Group>

          {/* Select Gender */}
          <Form.Group controlId="formGender" className="mb-3">
            <Form.Control
              as="select"
              className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
            >
              <option>Select Your Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          {/* Date of Birth */}
          <Form.Group controlId="formDOB" className="mb-3">
            <Form.Control
              type="date"
              className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
            />
          </Form.Group>

          {/* Update Profile Button */}
          <Button
            variant="primary"
            type="submit"
            className="w-100 rounded-4"
            style={{ backgroundColor: '#f08e2d', border: 'none' }} // Orange background
          >
            Update Profile
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
