import React from 'react'
import Header from '../../Components/header/Header'
import planImg from '../../assets/plan.png'
import everyBookingsvg from '../../assets/everyBooking.svg'
import stressFreesvg from '../../assets/stressFree.svg'
import Footer from '../../Components/footer/Footer'
import { Link } from 'react-router-dom';
import BookTickets from './BookTickets'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <section style={{padding:"0 10px"}}>
      <h3>Recommend For You </h3>
      <Link to='/Travels' style={{ textDecoration: 'none' }}>
        <div style={{backgroundColor:'#ffdda1',height:'150px',position:'relative',padding:'1rem',display:'flex',borderRadius:'10px', color:'black'}}>
          <h4>Plan where you need to Travel</h4>
          <img src={planImg} alt="plan" style={{width:'50%',height:'90%',}} />
        </div>
        </Link>
        <br />
        <Link to='/BookTickets' style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor:'#ffdda1',
            height:'150px',
            position:'relative',
            padding:'1rem',
            display:'flex',
            borderRadius:'10px',
            marginBottom: '10px',
            color: 'black'
          }}>
            <h4>Every Booking, Just a Tap Away</h4>
            <img src={everyBookingsvg} alt="plan" style={{width:'50%', height:'90%'}} />
          </div>
        </Link>
        <br />
        <Link to='/Travels' style={{ textDecoration: 'none' }}>
        <div style={{backgroundColor:'#ffdda1',height:'150px',position:'relative',padding:'1rem',display:'flex',borderRadius:'10px', color: 'black'}}>
          <h4>Manage Your Adventures, Stress-Free.</h4>
          <img src={stressFreesvg} alt="plan" style={{width:'50%',height:'90%',}} />
        </div>
        </Link>
      </section>
      <Footer/>
    </div>
  )
}

export default HomePage
