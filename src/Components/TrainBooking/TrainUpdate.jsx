import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrain, FaArrowLeft, FaRedoAlt } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';


const chennaiToKochi = [
  { arrival: '12:30 PM', place: 'Chennai Central ', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Katpadi Junction', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Salem Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Erode Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '1:00 AM', place: 'Palakkad Junction', distance: '565  km', platform: '1', departure: '1:20 AM' },
  { arrival: '1:30 AM', place: 'Kochi', distance: '23 km', platform: '700 Km', departure: '1:32 AM' }
];
const KochiToChennai = [
  { arrival: '12:30 PM', place: 'Kochi', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Palakkad Junction', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Erode Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Salem Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '1:00 AM', place: 'Katpadi Junction', distance: '565  km', platform: '1', departure: '1:20 AM' },
  { arrival: '1:30 AM', place: 'Chennai Central', distance: '23 km', platform: '700 Km', departure: '1:32 AM' }
];
const ChennaiToBengaluru = [
  { arrival: '12:30 PM', place: 'Chennai Central', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Katpadi Junction', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Jolarpettai Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Bengaluru City Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
];
const BengaluruToChennai = [
  { arrival: '12:30 PM', place: 'Bengaluru City Junction', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Jolarpettai Junction', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Katpadi Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Chennai Central', distance: '415  km', platform: '2', departure: '12:57 PM' },
];
const ChennaiToDelhi = [
  { arrival: '12:30 PM', place: 'Chennai Central', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Nagpur Junction ', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Bhopal Junction ', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Jhansi Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'New Delhi', distance: '515  km', platform: '2', departure: '12:57 PM' },
];
const DelhiToChennai = [
  { arrival: '12:30 PM', place: 'New Delhi', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Jhansi Junction ', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Bhopal Junction ', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Nagpur Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'Chennai Central', distance: '515  km', platform: '2', departure: '12:57 PM' },
];
const kochitoBengaluru = [
  { arrival: '12:30 PM', place: 'Ernakulam Junction', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Aluva ', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Palakkad Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Coimbatore Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'Salem Junction', distance: '515  km', platform: '2', departure: '12:57 PM' },
  { arrival: '14:55 PM', place: 'Salem Junction', distance: '615  km', platform: '2', departure: '12:57 PM' },
];
const Bengalurutokochi = [
  { arrival: '12:30 PM', place: 'Salem Junction', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Salem Junction ', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Coimbatore Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Palakkad Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'Aluva', distance: '515  km', platform: '2', departure: '12:57 PM' },
  { arrival: '14:55 PM', place: 'Ernakulam Junction', distance: '615  km', platform: '2', departure: '12:57 PM' },
];
const kochitoDelhi = [
  { arrival: '12:30 PM', place: 'Ernakulam Junction', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Kozhikode ', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Mangaluru Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Madgaon Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'Pune Junction', distance: '515  km', platform: '2', departure: '12:57 PM' },
  { arrival: '14:55 PM', place: 'Hazrat Nizamuddin ', distance: '615  km', platform: '2', departure: '12:57 PM' },
];
const Delhitokochi = [
  { arrival: '12:30 PM', place: 'Hazrat Nizamuddin', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Pune Junction ', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Madgaon Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Mangaluru Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'Kozhikode', distance: '515  km', platform: '2', departure: '12:57 PM' },
  { arrival: '14:55 PM', place: 'Ernakulam Junction ', distance: '615  km', platform: '2', departure: '12:57 PM' },
];
const BengaluruToDelhi = [
  { arrival: '12:30 PM', place: 'Bengaluru City Junction', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Dharmavaram Junction', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Guntakal Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Bhopal Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'Jhansi Junction', distance: '515  km', platform: '2', departure: '12:57 PM' },
  { arrival: '14:55 PM', place: 'Hazrat Nizamuddin', distance: '615  km', platform: '2', departure: '12:57 PM' },
];
const DelhiToBengaluru = [
  { arrival: '12:30 PM', place: 'Hazrat Nizamuddin', distance: '-', platform: '-', departure: '-' },
  { arrival: '12:40 PM', place: 'Jhansi Junction', distance: '130 km', platform: '1', departure: '12:42 PM' },
  { arrival: '12:45 PM', place: 'Bhopal Junction', distance: '350  km', platform: '1', departure: '12:47 PM' },
  { arrival: '12:55 PM', place: 'Guntakal Junction', distance: '415  km', platform: '2', departure: '12:57 PM' },
  { arrival: '13:55 PM', place: 'Dharmavaram Junction', distance: '515  km', platform: '2', departure: '12:57 PM' },
  { arrival: '14:55 PM', place: 'Bengaluru City Junction', distance: '615  km', platform: '2', departure: '12:57 PM' },
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

  const storedData = JSON.parse(localStorage.getItem("trainSearchData"));
  const from = storedData.fromLocation
  const to = storedData.toLocation
  const navigate = useNavigate();

  const [Array, setArray] = useState([])

  useEffect(() => {
    if (from=="Chennai" && to=="Kochi" ) {
      setArray(chennaiToKochi)
    } 
    else if(from=="Kochi" && to=="Chennai") {
      setArray(KochiToChennai)
    }
    else if(from=="Chennai" && to=="Bengaluru") {
      setArray(ChennaiToBengaluru)
    }
    else if(from=="Bengaluru" && to=="Chennai") {
      setArray(BengaluruToChennai)
    }
    else if(from=="Chennai" && to=="Delhi") {
      setArray(ChennaiToDelhi)
    }
    else if(from=="Delhi" && to=="Chennai") {
      setArray(DelhiToChennai)
    }
    else if(from=="Kochi" && to=="Bengaluru") {
      setArray(kochitoBengaluru)
    }
    else if(from=="Bengaluru" && to=="Kochi") {
      setArray(Bengalurutokochi)
    }
    else if(from=="Kochi" && to=="Delhi") {
      setArray(kochitoDelhi)
    }
    else if(from=="Delhi" && to=="Kochi") {
      setArray(Delhitokochi)
    }
    else if(from=="Bengaluru" && to=="Delhi") {
      setArray(BengaluruToDelhi)
    }
    else if(from=="Delhi" && to=="Bengaluru") {
      setArray(DelhiToBengaluru)
    }else{
      setArray(DelhiToBengaluru)
    }
 
  }, [])
  
  const goback =()=>{
    storedData.fromLocation=''
    storedData.toLocation=''
    localStorage.setItem('trainSearchData', JSON.stringify(storedData));
    navigate('/TrainBookHome')
  }

  return (
    <Container className="mt-4" >
      <div className="d-flex align-items-center w-100" style={{ backgroundColor: '#f08e2d', height: '10vh' }}>
        <button className="btn" style={{ color: 'white', border: 'none', height: '90%', width: '60px' }}>
          <FaArrowLeft size={24} onClick={goback} />
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
              {Array.map((train, index) => (
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
