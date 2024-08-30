import React, { useEffect, useState } from 'react'
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import Form from "react-bootstrap/Form";
import image1 from "../../assets/indiangate.jpeg";
import image2 from "../../assets/bengalurupalace.jpg";
import image3 from "../../assets/marinabeach.jpg";
import image4 from "../../assets/fortkochi.jpg";
import image5 from "../../assets/indiangate.jpeg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { API_URL } from '../../constant';
import axios from 'axios';

function HotelBookHome() {
const [place, setplace] = useState("Chennai")
const [type, setType] = useState("Hotel")
const [data, setData] = useState([])

  useEffect(() => {
    handleSubmit()
  }, [place,type])

    const handleSubmit = async () => {
        try {
          const response = await axios.post(`${API_URL}/booking/hotel/getHomeHotel`, { place,type });
          setData(response.data)
        } catch (err) {
          console.log(err);
        }
    };

  const navigate = useNavigate();

  // const goBack = () => {
  //   navigate(-1);
  // };

  const hotelDataSave = (data) => {
    localStorage.setItem('hotelData', JSON.stringify(data));
    navigate('/Hotelrooms');
  };
  return (
    <div style={{ backgroundColor: '#F3E8D6', }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4rem' }}>
        <div className="d-flex align-items-center mb-4">
          <Link to='/BookTickets'>
            <FaArrowLeft className="fs-4 me-3 text-warning" /></Link>
          <h2 className="text-dark">Hotel Booking</h2>
        </div>
        <div>
          <span>Current Location</span>
          <br />
          <span><FaLocationDot />Chennai</span>
        </div>
      </header>
      <section style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '1rem' }}>
        <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }} onClick={()=>{setType('Hotel')}}>Hotel</Button>
        <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }} onClick={()=>{setType('Homestay')}}>Homestay</Button>
        <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }} onClick={()=>{setType('Apartment')}}>Apartment</Button>
      </section>
      <section style={{ padding: "1rem" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <b>Near Location</b>
          <b style={{ color: "red" }} >See All</b>
        </div>
        <br />
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          className="mySwiper"

        >
             {
          data.filter(d => d.near === true).map((d,index) => {
             
          return <SwiperSlide>
            <div onClick={()=>hotelDataSave(d)}>
              <img
                src={
                  index==0?image1:
                  index==1?image2:
                  index==2?image3:
                  index==3?image4:
                  index==4?image5:''}
                alt="Indian Gate"
                style={{ width: "100%", height: "130px", borderRadius: "1rem" }}/>
            </div>
          </SwiperSlide>
          })}
          {/* <SwiperSlide>
            <Link to='/Hotelrooms'>
              <img
                src={bengalurupalace}
                alt="Bengaluru Palace"
                style={{ width: "100%", height: "130px", borderRadius: "1rem" }}
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
          <Link to='/Hotelrooms'>
            <img
              src={marinabeach}
              alt=""
              style={{ width: "100%", height: "130px", borderRadius: "1rem" }}
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to='/Hotelrooms'>
            <img
              src={fortkochi}
              alt=""
              style={{ width: "100%", height: "130px", borderRadius: "1rem" }}
            />
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </section>
      <section style={{ padding: "1rem" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <b>Near Location</b>
          <b style={{ color: "red" }} >See All</b>
        </div>
        <br />
        <div style={{ display: 'grid', gap: '1rem' }}>
        {
          data.filter(d => d.near !== true).map((d,index) => {
             
          return <div onClick={()=>hotelDataSave(d)}>
          <img
           src={
            index==0?image1:
            index==1?image2:
            index==2?image3:
            index==3?image4:
            index==4?image5:''}
            alt=""
            style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
          /></div>
          })}
          {/* <Link to='/Hotelrooms'>
            <img
              src={indiangate}
              alt=""
              style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
            /></Link>
          <Link to='/Hotelrooms'>
            <img
              src={bengalurupalace}
              alt=""
              style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
            /></Link>
          <Link to='/Hotelrooms'>
            <img
              src={marinabeach}
              alt=""
              style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
            /></Link>
          <Link to='/Hotelrooms'>
            <img
              src={fortkochi}
              alt=""
              style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
            /></Link> */}
        </div>
        <br />
        <Link to='/HotelViewTicket'>
          <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }}>View Ticket</Button>
        </Link>
      </section>
    </div>
  );
}

export default HotelBookHome;
