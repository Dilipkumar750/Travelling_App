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
import { Link } from "react-router-dom";


function Explore() {
  return (
    <div>
      <Header title='Explore' arrow={true}/>
      <Form.Control type="text" placeholder="Search" style={{width:'90%',margin:'10px 0 0 10px'}} />
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
        style={{ padding: "1rem" }}
      >
        <SwiperSlide>
          <div
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              padding: "10px",
              borderRadius: "1rem",
            }}
          >
            <img
              src={indiangate}
              alt=""
              style={{ width: "100%", height: "100px", borderRadius: "1rem" }}
            />
            <b>Indian Gate</b>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              padding: "10px",
              borderRadius: "1rem",
            }}
          >
            <img
              src={bengalurupalace}
              alt=""
              style={{ width: "100%", height: "100px", borderRadius: "1rem" }}
            />
            <b>Bengaluru Palace</b>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              padding: "10px",
              borderRadius: "1rem",
            }}
          >
            <img
              src={marinabeach}
              alt=""
              style={{ width: "100%", height: "100px", borderRadius: "1rem" }}
            />
            <b>Marina Beach</b>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              padding: "10px",
              borderRadius: "1rem",
            }}
          >
            <img
              src={fortkochi}
              alt=""
              style={{ width: "100%", height: "100px", borderRadius: "1rem" }}
            />
            <b>Fort Kochi</b>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className="mySwiper"
        style={{ padding: "1rem" }}
      >
        <SwiperSlide>
          <section style={{position:'relative'}}>
            <div
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                padding: "10px",
                borderRadius: "1rem",
                background: `url(${indiangate})`,
                height: '300px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div style={{ color: 'white', position: 'absolute', bottom: '1rem', textAlign: 'center' }}>
                <b style={{ fontSize: '2rem' }}>Indian Gate</b>
                <p>All our dreams can come true, if we have the courage to pursue them</p>
              </div>
            </div>
            <div style={{position:'absolute',bottom:'-1rem',display:'flex',justifyContent:'center', width:'100%'}}>
              <Link to='/BookTickets'><Button style={{backgroundColor:"#f08e2d"}}>View</Button></Link>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section style={{position:'relative'}}>
            <div
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                padding: "10px",
                borderRadius: "1rem",
                background: `url(${bengalurupalace})`,
                height: '300px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div style={{ color: 'white', position: 'absolute', bottom: '1rem', textAlign: 'center' }}>
                <b style={{ fontSize: '2rem' }}>Bengaluru Palace</b>
                <p>All our dreams can come true, if we have the courage to pursue them</p>
              </div>
            </div>
            <div style={{position:'absolute',bottom:'-1rem',display:'flex',justifyContent:'center', width:'100%'}}>
              <Link to='/BookTickets'><Button style={{backgroundColor:"#f08e2d"}}>View</Button></Link>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section style={{position:'relative'}}>
            <div
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                padding: "10px",
                borderRadius: "1rem",
                background: `url(${marinabeach})`,
                height: '300px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div style={{ color: 'white', position: 'absolute', bottom: '1rem', textAlign: 'center' }}>
                <b style={{ fontSize: '2rem' }}>Marina Beach</b>
                <p>All our dreams can come true, if we have the courage to pursue them</p>
              </div>
            </div>
            <div style={{position:'absolute',bottom:'-1rem',display:'flex',justifyContent:'center', width:'100%'}}>
              <Link to='/BookTickets'><Button style={{backgroundColor:"#f08e2d"}}>View</Button></Link>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section style={{position:'relative'}}>
            <div
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                padding: "10px",
                borderRadius: "1rem",
                background: `url(${fortkochi})`,
                height: '300px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div style={{ color: 'white', position: 'absolute', bottom: '1rem', textAlign: 'center' }}>
                <b style={{ fontSize: '2rem' }}>Fort Kochi</b>
                <p>All our dreams can come true, if we have the courage to pursue them</p>
              </div>
            </div>
            <div style={{position:'absolute',bottom:'-1rem',display:'flex',justifyContent:'center', width:'100%'}}>
              <Link to='/BookTickets'><Button style={{backgroundColor:"#f08e2d"}}>View</Button></Link>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Explore;
