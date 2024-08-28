import React, { useState } from "react";
import Header from "../header/Header";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import fifteen from '../../assets/fifteenoffer.svg';
import twintythreeoffer from '../../assets/twintythreeoffer.svg';
import { Link } from "react-router-dom";
import hotel from '../../assets/popular_hotel2.jpeg';
// import 'swiper/swiper-bundle.min.css'; // Make sure you import Swiper styles

const FlightBookHome = () => {
  const [fromLocation] = useState("");

  return (
    <div>
      <Header />
      <img src={hotel} alt="Popular hotel" style={styles.hotelImage} />
      <section style={{ padding: "1rem" }}>
        <div style={styles.headerSection}>
          <div>
            <h2>Beach House Studio</h2>
            <p>Oceanfront rooms and studios offering unparalleled beachfront living (530-565 sq. ft.)</p>
            <p><strong>BEST AVAILABLE RATE</strong></p>
            <p>$2,770 <br /> Average per night, before taxes and fees</p>
            <p>1 Bed / 1 Extra Bed Available <br /> UP TO 3 GUESTS</p>
            <Button style={styles.bookButton}>Book</Button>
          </div>
        </div>
        
        <div style={styles.offersSection}>
          <div style={styles.offerHeader}>
            <h6><strong>Hot Offer</strong></h6>
            <p style={{ color: "red" }}>See all</p>
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
          <Link to='/flightviewticket'>
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
    width: '90%',
    height: 'auto',
  }
};

export default FlightBookHome;
