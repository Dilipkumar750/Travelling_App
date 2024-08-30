import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QR from '../../assets/qr.png';
import HotelLogo from '../../assets/merdian.png'; // Import the correct logo
import { GiSofa } from "react-icons/gi";
import { FaRegCircleUser, FaArrowLeft } from "react-icons/fa6";
import { Button } from 'react-bootstrap';
import { API_URL } from '../../constant';
import axios from 'axios';

const HotelTicket = () => {
  const storedData = JSON.parse(localStorage.getItem("hotelData"));
  const user = JSON.parse(localStorage.getItem("user"));

  
  const [vihicleid, setVihicleid] = useState()
  const [details, setDetails] = useState([])
// console.log(details)
  useEffect(() => {
    handleSubmit()
    if(setVihicleid){
      handleGetBooking()
    }
  }, [user,setVihicleid])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/getUser/${user.email}`);
      const lastItem = response?.data?.hotelbooking?.length==1? response?.data?.hotelbooking[0]:response?.data?.hotelbooking[response?.data?.hotelbooking?.length - 1];
      setVihicleid(lastItem)

    } catch (err) {
      console.log(err);
    }
  };
  const handleGetBooking = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking/getBookingById/get/${vihicleid}`);
      setDetails(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  const commonStyles = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '20px auto',
  };

  const header = {
    logo: HotelLogo, // Use the correct logo variable
    date: '26/May/2023',
  };

  const flightInfo = [
    { date: '20-8-2024', time: '08:30', location: 'Check-In' },
    { date: '', time: '3 days', location: '' },
    { date: '23-8-2024', time: '09:30', location: 'Check-Out' }
  ];

  const detailss = [
    { label: 'Room No', value: '123B' },
    { label: 'Count', value: '2' },
  ];

  const passenger = {
    name: '22 years, Male',
    seat: '17 D'
  };
  const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const goDone = () => {
      localStorage.removeItem('hotelData');

        navigate('/Done');
    };

  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '10px', backgroundColor: '#F3E8D6', }}>
      {/* Back Button and Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '10px' }}>
        <Link to="/BookTickets">
          <FaArrowLeft style={{ fontSize: '24px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black', marginRight: '45%' }}>Hotel Ticket</h2>
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
          <img src={header.logo} alt="Hotel Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
          <p style={{ marginLeft: 'auto', color: 'blue' }}>{details.vehicleName}</p>
        </div>

        {/* Flight Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>

          <div style={{ textAlign:'right'}}>
              <p><strong style={{ color: 'blue' }}>{details.departureTime}</strong><br />Check In</p>
            </div>
            <div style={{ textAlign:'center'}}>
            </div>
            <div style={{ textAlign:'left'}}>
              <p><strong style={{ color: 'blue' }}>{details.returnTime}</strong><br />Check out</p>
            </div>
        </div>

        <hr />

        {/* Room Details */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <strong style={{ color: 'blue' }}>Room No</strong> <p>123B</p>
            </div>
            <div>
              <strong style={{ color: 'blue' }}>Count </strong> <p>{details.travelerCount}</p>
            </div>
            <div>
              <strong style={{ color: 'blue' }}>Price </strong> <p>{details.price}</p>
            </div>
        </div>

        <hr />

        {/* Passenger Info */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FaRegCircleUser style={{ fontSize: '3rem', marginRight: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p><strong>Name:</strong><br />{user.username}</p>
            <p><strong><GiSofa /></strong> {passenger.seat}</p>
          </div>
        </div>

        <hr style={{ borderTop: '3px dashed' }} />

        {/* QR Code */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={QR} alt="QR Code" style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
      <Button variant="warning" style={{ width: '100%', backgroundColor: '#f08e2d', color: 'black' }} onClick={goDone}>Continue</Button>
    </div>
  );
}

export default HotelTicket;
