import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import Approve from '../Admin/Approved';
import Reject from '../Admin/Reject';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constant';
import axios from 'axios';

const passenger = {
  name: 'user',
  seat: '17 D'
};

const details = [
  { label: 'Quota', value: 'GN' },
  { label: 'Coach', value: 'S2' },
  { label: 'Seat', value: '17' },
  { label: 'Train', value: 'DJ017' }
];

const PendingRequests = () => {

  const [array, setArray] = useState([])
  useEffect(() => {
    handleSubmit()
  }, [])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking//allNotApprovedBooking/get`);
      setArray(response?.data.filter(item => item?.approved === false))
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container className='mb-5 pb-5'>
        <Header title='Requests' arrow={false} />
        <>
          <Row className="mb-4">
            <Col>
              <h5>Requests</h5>
            </Col>
          </Row>
          {array.map((item, index) => (
            <Card key={item._id} className="p-2 rounded-4 mb-3" style={{ backgroundColor: '#F3E8D6' }}>
              <Row className="align-items-center mb-1">
                <Col xs="auto">
                  <FaRegUserCircle style={{ fontSize: '2rem' }} />
                </Col>
                <Col>
                  <div className="d-flex justify-content-between">
                    <p><strong>Name:</strong><br /> {item.username}</p>
                    <p><strong><GiSofa /></strong> {item.selectedSeats}</p>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col className="text-center">
                  <strong className="text-primary">Type</strong><br /> {item.bookingType}
                </Col>
                <Col className="text-center">
                  <strong className="text-primary">Price:</strong><br /> {item.price}
                </Col>
                <Col className="text-center">
                  <strong className="text-primary">class:</strong><br /> {item.classType}
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Col xs="auto">
                  <Link to={`/Reject/${item._id}`}><Button variant="danger" className="me-2 rounded-5" style={{ height: '35px' }}>Reject</Button></Link>
                  <Link to={`/Approve/${item._id}`}><Button variant="success" className='rounded-5' style={{ height: '35px' }}>Approve</Button></Link>

                </Col>
              </Row>
            </Card>))}
        </>

      </Container>
      <div style={{ bottom: 0, position: 'fixed', width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default PendingRequests;
