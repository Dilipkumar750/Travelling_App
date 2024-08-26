import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon
import Toogle from '../assets/NotificationsToggle.png';

const Settings = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Link to="/Homepage">
              <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: 'black' }} />
            </Link>
            <h2 className="text-right" style={{ color: '#ff5f00' }}>
              Settings
            </h2>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1, textAlign: 'left', fontWeight: 'bold', marginLeft: '15px' }}>
              Notifications
            </span>
            <img src={Toogle} alt="Toggle" style={{ marginRight: '1px' }} />
          </div>
          
          <div className="mt-4">
            <p style={{ color: 'red', fontSize: '18px', marginLeft: '15px' }}>
              <Link to="/login" className="text-decoration-none" style={{ color: 'red' }}>
                Reset Data
              </Link>
            </p>
            <p style={{ color: 'red', fontSize: '18px', marginLeft: '15px' }}>
              <Link to="/login" className="text-decoration-none" style={{ color: 'red' }}>
                Delete My Account
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
