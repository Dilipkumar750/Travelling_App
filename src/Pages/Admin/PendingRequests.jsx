import React, { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiSofa } from 'react-icons/gi';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import Approve from '../Admin/Approved';
import Reject from '../Admin/Reject';
import { Link } from 'react-router-dom';

const passenger = {
  name: '22 years, Male',
  seat: '17 D'
};

const details = [
  { label: 'Quota', value: 'GN' },
  { label: 'Coach', value: 'S2' },
  { label: 'Seat', value: '17' },
  { label: 'Train', value: 'DJ017' }
];

const PendingRequests = () => {


  return (
    <div>
      <Header />
      <Container className="py-4">
          <>
            <Row className="mb-4">
              <Col>
                <h5>Requests</h5>
              </Col>
            </Row>

            {[1, 2, 3].map((_, index) => (
              <Row key={index} className="mb-4">
                <Col>
                  <Card className="p-3 rounded-4" style={{ backgroundColor: '#F3E8D6' }}>
                    <Row className="align-items-center mb-3">
                      <Col xs="auto">
                        <FaRegUserCircle style={{ fontSize: '2rem' }} />
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-between">
                          <p><strong>Name:</strong><br /> {passenger.name}</p>
                          <p><strong><GiSofa /></strong> {passenger.seat}</p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      {details.map((item, index) => (
                        <Col key={index} className="text-center">
                          <strong className="text-primary">{item.label}:</strong><br /> {item.value}
                        </Col>
                      ))}
                    </Row>
                    <Row className="justify-content-end">
                      <Col xs="auto">
                      <Link to='/reject'>
                        <Button variant="danger" className="me-2" style={{ height: '35px' }}>Reject</Button></Link>
                        <Link to='/Approve'>
                        <Button variant="success" style={{ height: '35px' }}>Approve</Button></Link>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            ))}
          </>

      </Container>
      <Footer />
    </div>
  );
};

export default PendingRequests;
