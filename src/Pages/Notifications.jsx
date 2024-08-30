// Notifications.js
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { API_URL } from '../constant';
import axios from 'axios';


const notifications = [
  { id: 1, title: 'New Request', time: '30 Min', text: 'User has requested your service' },
  { id: 2, title: 'Cash Received', time: '30 Min', text: 'Received ₹10,000.00 from User.' },
  { id: 3, title: 'Request Approved', time: '30 Min', text: 'Your request on Service Name has been approved' },
  { id: 4, title: 'Payment Successful', time: '30 Min', text: 'Payment of ₹10,000.00 was successfully processed to the destination. Thank you!!' },
];
const usernotifications = [
  { id: 1, title: 'Request Approved', time: '30 Min', text: 'Your Request on Train Book has been approved ' },
  { id: 2, title: 'Payment Successful', time: '30 Min', text: 'Payment of ₹10,000.00 was successfully processed to the destination. Thank You!' },
];

const Notifications = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  
  const [array, setArray] = useState([])
  useEffect(() => {
    handleSubmit()
  }, [])

    const handleSubmit = async () => {
        try {
          const response = await axios.get(`${API_URL}/booking//allNotApprovedBooking/get`);
          if (user.role=='admin') {
            setArray(response?.data.filter(item => item?.approved === false ))
          } else {
            setArray(response?.data.filter(item => item?.approved === true && item.username === user.username))
          }
        } catch (err) {
          console.log(err);
        }
    };
// console.log(array)

  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem('notificationsEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Link to={ user.role=='admin'? '/UserHomePage':'/HomePage'}>
              <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: 'black' }} />
            </Link>
            <h2 className="text-right" style={{ color: '#ff5f00' }}>
              Notifications
            </h2>
          </div>

          {notificationsEnabled ? (
            <>
            {
              user.role=='admin'?
              <>
                {array.map((notification,index) => (
                    <Link to="/PendingRequests" key={notification._id} style={{textDecoration:'none'}}>
                      <div
                        
                        style={{
                          backgroundColor: 'gray',
                          borderRadius: '10px',
                          padding: '15px',
                          marginBottom: '10px',
                          color: 'white',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <div style={{ fontWeight: 'bold' }}> {index==1?`New Request`:`Payment Successful. `} </div>
                          <div>30 Min</div>
                        </div>
                        <div> {index==1?`Received  ${notification.price} from  ${notification.username}.`:`Payment of ${notification.price} was successfully processed to the destination ( ${notification.to}). `} </div>
                      </div>
                    </Link>
                  ))}
              </>
              :
              <>
               {array.map((notification,index) => (
                      <div
                        key={notification._id}
                        style={{
                          backgroundColor: 'gray',
                          borderRadius: '10px',
                          padding: '15px',
                          marginBottom: '10px',
                          color: 'white',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <div style={{ fontWeight: 'bold' }}>New Request</div>
                          <div>30 Min</div>
                        </div>
                        <div> {index%2?`Your Request on ${notification.bookingType} Book has been approved`:`Payment of ${notification.price} was successfully processed to the destination. Thank You!. `} </div>
                      </div>
                  ))}
              </>
            }
            </>

          ) : (
            <p style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>Notifications are Off</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
