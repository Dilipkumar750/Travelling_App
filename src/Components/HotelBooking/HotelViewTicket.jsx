import React from 'react';
import { Link } from 'react-router-dom';
import QR from '../../assets/qr.png';
import HotelLogo from '../../assets/merdian.png'; // Import the correct logo
import { GiSofa } from "react-icons/gi";
import { FaRegCircleUser, FaArrowLeft } from "react-icons/fa6";

const HotelTicket = () => {
  const commonStyles = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '20px auto',
  };

  const header = {
    logo: HotelLogo, // Use the correct logo variable
    date: '26/May/2023',
  };

  const flightInfo = [
    { date: '20-8-2024', time: '08:30', location: 'Check-In' },
    { date: '', time: '3 days', location: '' },
    { date: '23-8-2024', time: '09:30', location: 'Check-Out' }
  ];

  const details = [
    { label: 'Room No', value: '123B' },
    { label: 'Count', value: '2' },
  ];

  const passenger = {
    name: '22 years, Male',
    seat: '17 D'
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '10px', backgroundColor: '#F3E8D6', }}>
      {/* Back Button and Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '10px' }}>
        <Link to="/Homepage">
          <FaArrowLeft style={{ fontSize: '24px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black', marginRight: '45%' }}>Hotel Ticket</h2>
      </div>

      <div style={commonStyles}>
        {/* Top Blue Shadow */}
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '0',
          right: '0',
          height: '10px',
          boxShadow: '0 -4px 8px rgba(0, 0, 255, 0.5)',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}></div>

        {/* Top Rectangle */}
        <div style={{
          position: 'absolute',
          top: '-25px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '10px',
          backgroundColor: 'pink',
          borderRadius: '5px',
        }}></div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={header.logo} alt="Hotel Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
          <p style={{ marginLeft: 'auto', color: 'blue' }}>{header.date}</p>
        </div>

        {/* Flight Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          {flightInfo.map((item, index) => (
            <div key={index} style={{ textAlign: index === 1 ? 'center' : index === 2 ? 'right' : 'left' }}>
              <p><strong style={{ color: 'blue' }}>{item.time}</strong><br />{item.location}</p>
            </div>
          ))}
        </div>

        <hr />

        {/* Room Details */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', alignItems: 'center', justifyContent: 'center' }}>
          {details.map((item, index) => (
            <div key={index}>
              <strong style={{ color: 'blue' }}>{item.label}:</strong> <p>{item.value}</p>
            </div>
          ))}
        </div>

        <hr />

        {/* Passenger Info */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FaRegCircleUser style={{ fontSize: '3rem', marginRight: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p><strong>Name:</strong><br />{passenger.name}</p>
            <p><strong><GiSofa /></strong> {passenger.seat}</p>
          </div>
        </div>

        <hr style={{ borderTop: '3px dashed' }} />

        {/* QR Code */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={QR} alt="QR Code" style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default HotelTicket;
