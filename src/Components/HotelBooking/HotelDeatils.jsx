import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaBed, FaArrowLeft } from 'react-icons/fa';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    personCount: '',
    bedsRequired: ''
  });
  const storedData = JSON.parse(localStorage.getItem("hotelData"));

  // Function to handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData, // Copy the existing state
      [id]: value  // Update the specific field by id
    });
  };
  const handleSubmit = () => {
    storedData.formdata=formData
    localStorage.setItem('hotelData', JSON.stringify(storedData));
    navigate('/RoomsAvailability')
  }
  // console.log(formData)

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };


  return (
    <div style={{ padding: '5%', backgroundColor: '#F3E8D6',height:'100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10%' }}>
        <FaArrowLeft onClick={goBack}
          style={{ color: '#ff5f00', fontSize: '20px', marginRight: '15px', marginTop: '10%' }} 
        />
        <h3 style={{ color: 'black', marginTop: '11%' }}>Hotel Details</h3>
      </div>
      
      <Form>
      <Form.Group controlId="checkInDate" className="mb-3">
        <Form.Label>
          <FaCalendarAlt style={{ marginRight: '10px' }} /> Check-In Date
        </Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter the Date"
          style={{ backgroundColor: '#ada8a8' }}
          value={formData.checkInDate}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="checkOutDate" className="mb-3">
        <Form.Label>
          <FaCalendarAlt style={{ marginRight: '10px' }} /> Check-Out Date
        </Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter the Date"
          style={{ backgroundColor: '#ada8a8' }}
          value={formData.checkOutDate}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="personCount" className="mb-3">
        <Form.Label>
          <FaUser style={{ marginRight: '10px' }} /> Person Count
        </Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter the Person Count"
          style={{ backgroundColor: '#ada8a8' }}
          value={formData.personCount}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="bedsRequired" className="mb-3">
        <Form.Label>
          <FaBed style={{ marginRight: '10px' }} /> Beds Required
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Single or Double, Separate"
          style={{ backgroundColor: '#ada8a8' }}
          value={formData.bedsRequired}
          onChange={handleInputChange}
        />
      </Form.Group>

    </Form>
      <Button
      onClick={handleSubmit}
        type="submit"
        variant="secondary"
        className="w-100"
        style={{ backgroundColor: '#ff5f00', border: 'none', color: 'white', marginTop: '50%' }}
      >
        Check Rooms
      </Button>
    </div>
  );
};

export default HotelDetails;
