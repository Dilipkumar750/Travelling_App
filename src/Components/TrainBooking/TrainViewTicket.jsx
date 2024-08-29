import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QR from '../../assets/qr.png';
import TrainLogo from '../../assets/train_color.jpeg';
import train from '../../assets/train color.png'; // Ensure the path is correct
import { GiSofa } from "react-icons/gi";
import { FaRegCircleUser, FaArrowLeft } from "react-icons/fa6";
import { API_URL } from '../../constant';
import axios from 'axios';

const TrainViewTicket = () => {

  const storedData = JSON.parse(localStorage.getItem("user"));
  const [vihicleid, setVihicleid] = useState()
  const [details, setDetails] = useState()
// console.log(details)
  useEffect(() => {
    handleSubmit()
    if(setVihicleid){
      handleGetBooking()
    }
  }, [storedData,setVihicleid])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/getUser/${storedData.email}`);
      const lastItem = response?.data.booking[response?.data.booking.length - 1];
      setVihicleid(lastItem)

    } catch (err) {
      console.log('something went wrong , try again');
    }
  };
  const handleGetBooking = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking/getBookingById/get/${vihicleid}`);
      setDetails(response.data)
    } catch (err) {
      console.log('something went wrong , try again');
    }
  };

  const formatDate = (isoDateString) => {
    // Convert ISO string to Date object
    const date = new Date(isoDateString);
  
    // Extract day, month, and year
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based
    const year = date.getUTCFullYear();
  
    // Format day and month to always be two digits
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    // Combine into desired format
    return `${formattedDay}/${formattedMonth}/${year}`;
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
    marginTop: '20%',
  };

  const header = {
    logo: TrainLogo,
    logoText: 'Indian Railways',
    date: '26/May/2023',
  };

  const trainInfo = [
    { time: '09:30PM', location: 'CHENNAI' },
    { time: '12 hours', location: '' },
    { time: '09:30AM', location: 'KERALA' }
  ];

  const detailss = [
    { label: 'Quota', value: 'GN' },
    { label: 'Coach', value: 'S2' },
    { label: 'Seat no', value: '17' },
    { label: 'Train No', value: 'DJ017' }
  ];

  const passenger = {
    name: '22 years, Male',
    seat: '17 D'
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F3E8D6', }}>
      {/* Back Button and Header (Outside the Card) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', maxWidth: '600px', margin: '0 auto' }}>
        <Link to="/BookTickets">
          <FaArrowLeft style={{ fontSize: '24px', color: '#ff5f00' }} />
        </Link>
        <h2 style={{ color: 'black', marginRight: '55%' }}>
          Train Ticket
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
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={header.logo} alt="Train Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
          <span style={{ color: 'blue', fontWeight: 'bold', marginRight: '10px' }}>{details?.vehicleName}</span>
          <p style={{ marginLeft: 'auto', color: 'blue' }}>{formatDate(details?.createdAt)}</p>
        </div>

        {/* Train Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ textAlign:'right'}}>
              <p><strong style={{ color: 'blue' }}>{details?.departureTime}</strong><br />{details?.from}</p>
            </div>
            <div style={{ textAlign:'center'}}>
              <p><strong style={{ color: 'blue' }}>{details?.duration}</strong><br /></p>
            </div>
            <div style={{ textAlign:'left'}}>
              <p><strong style={{ color: 'blue' }}>{details?.returnTime}</strong><br />{details?.to}</p>
            </div>
        </div>

        <hr />

        {/* Train Details */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', alignItems: 'center', justifyContent: 'center' }}>
          <div>
              <strong style={{ color: 'blue' }}>Quota:</strong> <p>{details?.classType}</p>
            </div>
          <div>
              <strong style={{ color: 'blue' }}>Coach</strong> <p>S2</p>
            </div>
          <div>
              <strong style={{ color: 'blue' }}>Seat no</strong> <p>{details?.selectedSeats}</p>
            </div>
          <div>
              <strong style={{ color: 'blue' }}>Train No</strong> <p>DJ017</p>
            </div>
        </div>

        <hr />

        {/* Passenger Info */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FaRegCircleUser style={{ fontSize: '3rem', marginRight: '10px', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p><strong>Name:</strong><br />{details?.username}</p>
            <p><strong><GiSofa /></strong>{details?.selectedSeats}</p>
          </div>
        </div>
        <hr style={{ borderTop: '1px dashed' }} />

        {/* QR Code */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={QR} alt="QR Code" style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default TrainViewTicket;
  