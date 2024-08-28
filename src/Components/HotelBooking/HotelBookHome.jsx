import React from "react";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import Form from "react-bootstrap/Form";
import indiangate from "../../assets/indiangate.jpeg";
import bengalurupalace from "../../assets/bengalurupalace.jpg";
import marinabeach from "../../assets/marinabeach.jpg";
import fortkochi from "../../assets/fortkochi.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function HotelBookHome() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <header style={{display:'flex',justifyContent:'space-between',paddingTop:'4rem'}}>
        <div className="d-flex align-items-center mb-4">
          <FaArrowLeft className="fs-4 me-3 text-warning" onClick={goBack} />
          <h2 className="text-dark">Hotel Booking</h2>
        </div>
        <div>
          <span>Current Location</span>
          <br />
          <span><FaLocationDot />Chennai</span>
        </div>
      </header>
      <section style={{display:'flex',justifyContent:'space-between',gap:'1rem',padding:'1rem'}}>
      <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }}>Hotel</Button>
      <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }}>Homestay</Button>
      <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }}>Apartment</Button>
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
          <SwiperSlide>
            <img
              src={indiangate}
              alt=""
              style={{ width: "100%", height: "130px", borderRadius: "1rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bengalurupalace}
              alt=""
              style={{ width: "100%", height: "130px", borderRadius: "1rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={marinabeach}
              alt=""
              style={{ width: "100%", height: "130px", borderRadius: "1rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={fortkochi}
              alt=""
              style={{ width: "100%", height: "130px", borderRadius: "1rem" }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section style={{ padding: "1rem" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <b>Near Location</b>
          <b style={{ color: "red" }} >See All</b>
        </div>
        <br />
        <div style={{ display: 'grid', gap: '1rem' }}>
          <img
            src={indiangate}
            alt=""
            style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
          />
          <img
            src={bengalurupalace}
            alt=""
            style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
          />
          <img
            src={marinabeach}
            alt=""
            style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
          />
          <img
            src={fortkochi}
            alt=""
            style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
          />
        </div>
        <br />
        <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0', borderRadius: '10px', color: 'black' }}>View Ticket</Button>
      </section>
    </div>
  );
}

export default HotelBookHome;
