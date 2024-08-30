import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import profile from '../assets/profile.webp'
import { API_URL } from '../constant';
import axios from 'axios';


const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState({
    firstname: user?.username,
    lastname: user?.lastname || "",
    number: user?.contactNo,
    gender: user?.gender || "",
    dob: user?.dob || "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_URL}/user/updateProfile/${user.email}`, // Your backend endpoint
        {
          username: formData.firstname,
          lastname: formData.lastname,
          contactNo: formData.number,
          gender: formData.gender,
          dob: formData.dob,
        }
      );

      // Update user data in localStorage
      const updatedUser = { ...user, ...response.data.updatedUser };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      console.log( response);
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <Header title='Profile' arrow={false}/>
      <Container className="mt-4 mb-4 flex-grow-1">
        {/* Centered Profile Information */}
        <Row className="justify-content-center text-center mb-4">
          <Col xs="auto">
            <Image src={profile} alt="Profile" fluid roundedCircle className="mb-3" style={{ width: '35%', height: '55%', objectFit: 'cover' }} />
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
      {/* First Name */}
      <Form.Group controlId="formFirstName" className="mb-3">
        <Form.Control
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
        />
      </Form.Group>

      {/* Last Name */}
      <Form.Group controlId="formLastName" className="mb-3">
        <Form.Control
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
        />
      </Form.Group>

      {/* Phone Number */}
      <Form.Group controlId="formPhoneNumber" className="mb-3">
        <Form.Control
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
        />
      </Form.Group>

      {/* Select Gender */}
      <Form.Group controlId="formGender" className="mb-3">
        <Form.Control
          as="select"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
        >
          <option value="">Select Your Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

      {/* Date of Birth */}
      <Form.Group controlId="formDOB" className="mb-3">
        <Form.Control
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border-0 border-bottom border-secondary rounded-0 shadow-none mb-3"
        />
      </Form.Group>

      {/* Update Profile Button */}
      <Button
        variant="primary"
        type="submit"
        className="w-100 rounded-4"
        style={{ backgroundColor: '#f08e2d', border: 'none' }}
      >
        Update Profile
      </Button>
    </Form>
      </Container>
      <div style={{bottom: 0, position:'fixed', width: '100%'}}>
        <Footer/> 
        </div>
    </div>
  );
}

export default Profile;
