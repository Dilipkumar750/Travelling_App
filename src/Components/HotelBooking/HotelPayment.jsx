import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import hotel from '../../assets/popular_hotel2.jpeg';

const roomInfo = [
  { label: 'No. of rooms', value: '1' },
  { label: 'Room type', value: 'Air conditioned' },
  { label: 'Room', value: '3 Nights ($127 x 3)', amount: '$381' },
  { label: 'Taxes', value: '', amount: '$25' },
];

const guestInfo = [
  { label: 'Name', value: 'Xyzabc' },
  { label: 'Email', value: 'xyz@gmail.com' },
  { label: 'Mobile number', value: '+91 0000000000' },
];

const HotelPayment = () => {
  const totalAmount = '$406';

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', backgroundColor: '#F3E8D6', }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '10px' }}>
        <Link to="/Homepage">
          <FaArrowLeft style={{ fontSize: '24px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black', marginRight: '40%', fontSize: '15px' }}>Hotel Confirmation</h2>
      </div>
      <img src={hotel} alt="Hotel" style={{ width: '100%', borderRadius: '8px', marginBottom: '5px' }} />

      <div style={{ marginBottom: '1px' }}>
        <h5 style={{ fontSize: '18px', marginBottom: '10px' }}>Room Info</h5>
        {roomInfo.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between',  padding: '5px', borderRadius: '4px', marginBottom: '5px' }}>
            <p>{item.label}:</p>
            <p><strong>{item.amount ? `${item.value} = ${item.amount}` : item.value}</strong></p>
          </div>
        ))}
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <strong>Total:</strong>
          <strong>{totalAmount}</strong>
        </div>
      </div>
      <hr />

      <div style={{ marginBottom: '15%' }}>
        <h5 style={{ fontSize: '18px', marginBottom: '10px' }}>Guest Info</h5>
        {guestInfo.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#F3E8D6', padding: '5px', borderRadius: '4px', marginBottom: '5px' }}>
            <p>{item.label}:</p>
            <p><strong>{item.value}</strong></p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '1px' }}>
        <h5 style={{ fontSize: '18px', marginBottom: '10px' }}>Promo Code</h5>
        <p>If you have a promo code, please enter it below:</p>
        <Form.Control type="text" placeholder="Enter Promo code" style={{ marginBottom: '10px' }} />
      </div>
      <Link to='/payment'>
      <Button variant="warning" style={{ width: '100%', backgroundColor: '#f08e2d', color: 'black' }}>Confirm Order</Button>
      </Link>
    </div>
  );
}

export default HotelPayment;
