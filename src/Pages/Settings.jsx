// Settings.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { API_URL } from '../constant';
import axios from 'axios'; // Make sure to import axios

const Settings = () => {
  const navigate = useNavigate(); // For navigation after successful login
  const user = JSON.parse(localStorage.getItem("user"));
  const [email, setemail] = useState(user.email)
  const handleSubmit = async () => {
    try {
      const response = await axios.delete(`${API_URL}/user/delete`, {
        data: { email }
      });
      // console.log(response)
        navigate('/Login');
    } catch (err) {
      console.log(err)
    }
  };

  // Initialize state from localStorage or default to true
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem('notificationsEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Update localStorage whenever notificationsEnabled changes
  useEffect(() => {
    localStorage.setItem('notificationsEnabled', JSON.stringify(notificationsEnabled));
  }, [notificationsEnabled]);

  const toggleNotifications = () => {
    setNotificationsEnabled(prevState => !prevState);
  };

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

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ flex: 1, textAlign: 'left', fontWeight: 'bold', marginLeft: '15px' }}>
              Notifications
            </span>
            <BootstrapSwitchButton
              checked={notificationsEnabled}
              onstyle="success"
              offstyle="danger"
              onlabel="On"
              offlabel="Off"
              onChange={toggleNotifications}
            />
          </div>

          <div className="mt-4">
            <p style={{ color: 'red', fontSize: '18px', marginLeft: '15px' }}>
              <Link to="/login" className="text-decoration-none" style={{ color: 'red' }}>
                Reset Data
              </Link>
            </p>
            <p style={{ color: 'red', fontSize: '18px', marginLeft: '15px' }}>
              <p onClick={handleSubmit} className="text-decoration-none" style={{ color: 'red' }}>
                Delete My Account
              </p>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
