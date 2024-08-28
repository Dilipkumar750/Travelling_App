import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrain, FaArrowLeft, FaRedoAlt } from 'react-icons/fa'; // Import icons

const trainData = [
  { arrival: '12:30 PM', place: 'Kumbakonam', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Darasuram', distance: '4 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Swamimalai', distance: '8 km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Sundaraperumal Kovil', distance: '18 km', platform: '2', departure: '12:57 PM' },
  { arrival: '1:00 AM', place: 'Papanasam', distance: '23 km', platform: '1', departure: '1:20 AM' },
  { arrival: '1:30 AM', place: 'Thanjavur', distance: '23 km', platform: '1', departure: '1:32 AM' }
];

const tableStyle = {
  borderCollapse: 'separate',
  borderSpacing: '0',
  width: '100%',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
};

const cellStyle = {
  position: 'relative', // Position relative for vertical line positioning
  padding: '10px'
};

const headerStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid black'
};

const verticalLineStyle = {
  position: 'absolute',
  left: '0',
  top: '0',
  height: '100%',
  width: '10px',
  backgroundColor: 'blue'
};

const TrainUpdate = () => {
  return (
    <Container className="mt-4" >
      <div className="d-flex align-items-center w-100" style={{ backgroundColor: '#f08e2d', height: '10vh' }}>
        <button className="btn" style={{ color: 'white', border: 'none', height: '90%', width: '60px' }}>
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-white mx-auto mb-0">Train Details</h1>
      </div>
      <Row>
        <Col>
          <br />
          <Table bordered hover style={tableStyle}>
            <thead>
              <tr>
                <th style={headerStyle}>Arrival</th>
                <th style={headerStyle}>Day 0 - May 26, Sun</th>
                <th style={headerStyle}>Departure</th>
              </tr>
            </thead>
            <tbody>
              {trainData.map((train, index) => (
                <tr key={index}>
                  <td style={cellStyle}>
                    <div style={{color: 'red'}}>{train.arrival}</div>
                    
                    {train.place === 'Kumbakonam' && (
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          top: '-15px',
                          right: '-13px',
                          background: '#fff',
                          borderRadius: '50%',
                          padding: '2px'
                        }}>
                          <FaTrain />
                        </div>
                      </div>
                    )}
                  </td>
                  <td style={cellStyle}>
                    {train.place}<br />
                    {train.distance} - Platform {train.platform}
                    <div style={verticalLineStyle} />
                  </td>
                  <td style={{ ...cellStyle, color: 'red' }}>{train.departure}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="d-flex align-items-center">
            <div className="alert alert-info" role="alert" style={{ backgroundColor: 'gray', color: 'white', borderColor: 'gray' }}>
              <strong>At Kumbakonam</strong><br />
              Updated few seconds ago
            </div>
            <button className="btn btn-secondary ms-2" style={{ height: '100%', border: 'none', backgroundColor: 'white', color: 'black' }}>
              <FaRedoAlt size={24} />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrainUpdate;
