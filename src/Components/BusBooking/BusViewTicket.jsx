import React from 'react';
import { Link } from 'react-router-dom';
import QR from '../../assets/qr.png';
import TravelBus from '../../assets/Travel_bus.png'; // Ensure the path is correct
import { GiSofa } from "react-icons/gi";
import { FaRegCircleUser, FaArrowLeft } from "react-icons/fa6";

const BusViewTicket = () => {
  const header = {
    logo: TravelBus,
    date: '26/May/2023',
  };

  const info = [
    { time: '09:30PM', location: 'CHENNAI' },
    { time: '12 hours', location: '' },
    { time: '09:30AM', location: 'KERALA' }
  ];

  const details = [
    { label: 'Economy', value: 'Class' },
    { label: 'B2', value: 'Bus' },
  ];

  const passenger = {
    name: '22 years, Male',
    seat: '17 D'
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F3E8D6', }}>
      {/* Back Button and Header (Outside the Card) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', maxWidth: '600px', margin: '0 auto' }}>
        <Link to="/Homepage">
          <FaArrowLeft style={{ fontSize: '24px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black', marginRight: '55%' }}>
          Bus Ticket
        </h2>
      </div>

      <div style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        backgroundColor: '#fff',
        maxWidth: '600px',
        margin: '20px auto',
        marginTop: '20%',
      }}>
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
          <img src={header.logo} alt="Bus Logo" style={{ width: '70px', height: 'auto', marginRight: '10px' }} />
          <p style={{ marginLeft: 'auto', color: 'blue' }}>{header.date}</p>
        </div>

        {/* Info Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          {info.map((item, index) => (
            <div key={index} style={{ textAlign: index === 1 ? 'center' : index === 2 ? 'right' : 'left' }}>
              <p><strong style={{ color: 'blue' }}>{item.time}</strong><br />{item.location}</p>
            </div>
          ))}
        </div>

        <hr />

        {/* Details Section */}
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
          <FaRegCircleUser style={{ fontSize: '3rem', marginRight: '10px', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p><strong>Name:</strong><br /> {passenger.name}</p>
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

export default BusViewTicket;
