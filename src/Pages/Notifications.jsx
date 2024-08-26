import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon

// Combined notifications array
const notifications = [
  { id: 1, title: 'New Request', time: '30 Min', text: 'User has requested your service' },
  { id: 2, title: 'Cash Received', time: '30 Min', text: 'Received ₹10,000.00 from User.' },
  { id: 3, title: 'Request Approved', time: '30 Min', text: 'Your request on Service Name has been approved' },
  { id: 4, title: 'Payment Successful', time: '30 Min', text: 'Payment of ₹10,000.00 was successfully processed to the destination. Thank you!!' },
];

const Notifications = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Link to="/Homepage">
              <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: 'black' }} />
            </Link>
            <h2 className="text-right" style={{ color: '#ff5f00' }}>
              Notifications
            </h2>
          </div>
          
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              style={{
                backgroundColor: 'gray',
                borderRadius: '10px',
                padding: '15px',
                marginBottom: '10px',
                color: 'white'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <div style={{ fontWeight: 'bold' }}>{notification.title}</div>
                <div>{notification.time}</div>
              </div>
              <div>{notification.text}</div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
