import React, { useState } from "react";
import Header from "../header/Header";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import fifteen from '../../assets/fifteenoffer.svg';
import twintythreeoffer from '../../assets/twintythreeoffer.svg';
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import hotel from '../../assets/popular_hotel2.jpeg';
import slide from '../../assets/hotelrooms.png';
import { MdOutlineKingBed } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
// import 'swiper/swiper-bundle.min.css'; // Ensure Swiper styles are imported

const HotelRooms = () => {
  const [fromLocation] = useState("");

    const navigate = useNavigate();
  
    const goBack = () => {
      navigate(-1);
    };
    const storedData = JSON.parse(localStorage.getItem("hotelData"));
// console.log(storedData)

  return (
    <div style={{backgroundColor: '#F3E8D6', height: '100%'}}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
        <FaArrowLeft onClick={goBack}
          style={{ color: '#ff5f00', fontSize: '20px', marginRight: '15px', marginTop: '4%' }} 
        />
        <h3 style={{ color: 'black', marginTop: '5%' }}>{storedData.type} Details</h3>
      </div>
      <img src={hotel} alt="Popular hotel" style={styles.hotelImage} />
      <img src={slide} alt="Hotel rooms" style={{ ...styles.hotelImage, marginTop: '2%' }} />
      <section style={{ padding: "1rem" }}>
        <div style={styles.headerSection}>
          <div>
            <h2>{storedData?.name}</h2>
            <p style={{ fontSize: '12px'}}>{storedData?.description}</p>
            <h6>Room Details</h6>
            <p><strong>BEST AVAILABLE RATE</strong></p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '-5%'}}>${storedData?.price} </p>
            <h6 style={{ fontSize: '12px'}}> Average per night, before taxes and fees</h6>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontSize: '10px', marginRight: '1px' }}>
                <MdOutlineKingBed /> 1 Bed / 1 Extra<br /> Bed Available
              </p>
              <p style={{ fontSize: '10px', marginRight: '10%' }}>
                <CiUser /> UP TO {storedData?.guests} GUESTS
              </p>
              <Link to='/HotelDeatils'>
                <Button style={{ ...styles.bookButton, width: '100%' }}>Book</Button>
              </Link>
            </div>
          </div>
        </div>

        <div style={styles.offersSection}>
          <div style={styles.offerHeader}>
            <h6><strong>Hot Offer</strong></h6>
            <p style={{ color: "red", cursor: "pointer" }}>See all</p>
          </div>
          <Swiper slidesPerView={1} spaceBetween={20} className="mySwiper">
            <SwiperSlide>
              <div className="card mb-3" style={styles.card}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={fifteen} className="img-fluid rounded-start" alt="15% discount with Mastercard" style={styles.cardImage} />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">15% discount with Mastercard</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-3" style={styles.card}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={twintythreeoffer} className="img-fluid rounded-start" alt="23% discount in Visa credit card" style={styles.cardImage} />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">23% discount in Visa credit card</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet etet adip</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link to='/HotelViewTicket'>
            <Button style={styles.viewTicketButton}>View Ticket</Button>
          </Link>
        </div>
      </section>
      <style jsx>{`
        .mySwiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

// Inline styles object
const styles = {
  headerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  bookButton: {
    backgroundColor: '#f08e2d',
    color: 'black',
  },
  offersSection: {
    padding: "0 1rem",
  },
  offerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    backgroundColor: '#f8f9fa',
  },
  cardImage: {
    height: '100%',
  },
  viewTicketButton: {
    backgroundColor: '#f08e2d',
    width: '100%',
    color: 'black',
  },
  hotelImage: {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
    padding: '10px',
    borderRadius: '30px',
  }
};

export default HotelRooms;
