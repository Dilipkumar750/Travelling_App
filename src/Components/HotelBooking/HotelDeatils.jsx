import React from 'react';
import { FaCalendarAlt, FaUser, FaBed, FaArrowLeft } from 'react-icons/fa';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

  return (
    <div style={{ padding: '5%', backgroundColor: '#F3E8D6', }}>
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
            style={{ backgroundColor: '#ada8a8' }} // Use a light gray color
          />
        </Form.Group>

        <Form.Group controlId="checkOutDate" className="mb-3">
          <Form.Label>
            <FaCalendarAlt style={{ marginRight: '10px' }} /> Check-Out Date
          </Form.Label>
          <Form.Control 
            type="date" 
            placeholder="Enter the Date" 
            style={{ backgroundColor: '#ada8a8' }} // Use a light gray color
          />
        </Form.Group>

        <Form.Group controlId="personCount" className="mb-3">
          <Form.Label>
            <FaUser style={{ marginRight: '10px' }} /> Person Count
          </Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter the Person Count" 
            style={{ backgroundColor: '#ada8a8' }} // Use a light gray color
          />
        </Form.Group>

        <Form.Group controlId="bedsRequired" className="mb-3">
          <Form.Label>
            <FaBed style={{ marginRight: '10px' }} /> Beds Required
          </Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Single or Double, Separate" 
            style={{ backgroundColor: '#ada8a8' }} // Use a light gray color
          />
        </Form.Group>

        <Link to="/RoomsAvailability">
          <Button 
            variant="secondary" // React Bootstrap variant
            className="w-100" 
            style={{ backgroundColor: '#ff5f00', border: 'none', color: 'white', marginTop: '50%' }}
          >
            Check Rooms
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default HotelDetails;
