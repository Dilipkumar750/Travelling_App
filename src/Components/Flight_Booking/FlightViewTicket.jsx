import React from 'react';
import { Link } from 'react-router-dom';
import QR from '../../assets/qr.png';
import Airindia from '../../assets/air india.png';
import { GiSofa } from "react-icons/gi";
import { FaRegCircleUser, FaArrowLeft } from "react-icons/fa6";

const ViewTicket = () => {
  const commonStyles = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 2.0)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '20px auto',
    marginTop: '20%',
    marginLeft: '10px',
    marginRight: '10px',
  };

  const headerStyles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    logoText: {
      color: 'blue',
      fontWeight: 'bold',
      marginRight: '10px',
    },
    date: {
      marginLeft: 'auto',
      color: 'blue',
    },
  };

  const flightInfoStyles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    time: {
      color: 'blue',
    },
    center: {
      flex: 1,
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
  };

  const detailsStyles = {
    container: {
      display: 'flex',
      gap: '20px',
      marginBottom: '10px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      color: 'blue',
    },
  };

  const footerStyles = {
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <div style={{ padding: '2px', textAlign: 'center', marginTop: '10px' }}>
      {/* Back Button and Header (Outside the Card) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', maxWidth: '600px', margin: '0 auto' }}>
        <Link to="/Homepage">
          <FaArrowLeft style={{ fontSize: '24px',  color: '#ff5f00' }} />
        </Link>
        <h2 style={{color: 'black', marginRight: '55%'}}>
          Flight Ticket
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
        <div style={headerStyles.container}>
          <img src={Airindia} alt="Air India Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
          <span style={headerStyles.logoText}>Air India</span>
          <p style={headerStyles.date}>26/May/2023</p>
        </div>

        {/* Flight Info */}
        <div style={flightInfoStyles.container}>
          <p><strong style={flightInfoStyles.time}>08:30</strong><br />CHENNAI</p>
          <p style={flightInfoStyles.center}><strong>1 hour</strong></p>
          <p style={flightInfoStyles.right}><strong style={flightInfoStyles.time}>09:30</strong><br />BANGALORE</p>
        </div>

        <hr />

        {/* Flight Details */}
        <div style={detailsStyles.container}>
          <div>
            <strong style={detailsStyles.label}>Class:</strong> <p>Economy</p>
          </div>
          <div>
            <strong style={detailsStyles.label}>Gate:</strong> <p>17 D</p>
          </div>
          <div>
            <strong style={detailsStyles.label}>Terminal:</strong> <p>4</p>
          </div>
          <div>
            <strong style={detailsStyles.label}>Flight:</strong> <p>DJ017</p>
          </div>
        </div>

        <hr />

        {/* Passenger Info */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FaRegCircleUser style={{ fontSize: '3rem', marginRight: '10px', marginBottom: '10px' }} /><br />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p><strong>Name:</strong><br />22 years, Male</p>
            <p><strong><GiSofa /></strong> 17 D</p>
          </div>
        </div>
        <hr style={{ borderTop: '1px dashed' }} />

        {/* QR Code */}
        <div style={footerStyles}>
          <img src={QR} alt="QR Code" style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default ViewTicket;
