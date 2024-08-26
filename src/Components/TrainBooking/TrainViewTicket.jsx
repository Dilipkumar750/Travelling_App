import React from 'react';
import { Link } from 'react-router-dom';
import QR from '../../assets/qr.png';
import TrainLogo from '../../assets/train_color.jpeg';
import train from '../../assets/train color.png'; // Ensure the path is correct
import { GiSofa } from "react-icons/gi";
import { FaRegCircleUser, FaArrowLeft } from "react-icons/fa6";

const TrainViewTicket = () => {
  const commonStyles = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '20px auto',
    marginTop: '20%',
  };

  const header = {
    logo: TrainLogo,
    logoText: 'Indian Railways',
    date: '26/May/2023',
  };

  const trainInfo = [
    { time: '09:30PM', location: 'CHENNAI' },
    { time: '12 hours', location: '' },
    { time: '09:30AM', location: 'KERALA' }
  ];

  const details = [
    { label: 'Quota', value: 'GN' },
    { label: 'Coach', value: 'S2' },
    { label: 'Seat no', value: '17' },
    { label: 'Train No', value: 'DJ017' }
  ];

  const passenger = {
    name: '22 years, Male',
    seat: '17 D'
  };

  return (
    <div style={{ padding: '2px', textAlign: 'center' }}>
      {/* Back Button and Header (Outside the Card) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', maxWidth: '600px', margin: '0 auto' }}>
        <Link to="/Homepage">
          <FaArrowLeft style={{ fontSize: '24px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black', marginRight: '55%' }}>
          Train Ticket
        </h2>
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
          <img src={header.logo} alt="Train Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
          <span style={{ color: 'blue', fontWeight: 'bold', marginRight: '10px' }}>{header.logoText}</span>
          <p style={{ marginLeft: 'auto', color: 'blue' }}>{header.date}</p>
        </div>

        {/* Train Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          {trainInfo.map((item, index) => (
            <div key={index} style={{ textAlign: index === 1 ? 'center' : index === 2 ? 'right' : 'left' }}>
              {index === 1 ? (
                <>
                  <img src={train} alt="Train Icon" style={{ width: '40%', height: 'auto' }} /><br />
                  <p style={{ textAlign: 'center' }}><strong>{item.time}</strong></p>
                </>
              ) : (
                <p><strong style={{ color: 'blue' }}>{item.time}</strong><br />{item.location}</p>
              )}
            </div>
          ))}
        </div>

        <hr />

        {/* Train Details */}
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
            <p><strong>Name:</strong><br />{passenger.name}</p>
            <p><strong><GiSofa /></strong> {passenger.seat}</p>
          </div>
        </div>
        <hr style={{ borderTop: '1px dashed' }} />

        {/* QR Code */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={QR} alt="QR Code" style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default TrainViewTicket;
  