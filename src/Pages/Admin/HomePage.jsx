import React from 'react'
import Header from '../../Components/header/Header'
import planImg from '../../assets/plan.png'
import everyBookingsvg from '../../assets/everyBooking.svg'
import stressFreesvg from '../../assets/stressFree.svg'
import Footer from '../../Components/footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <section style={{padding:"0 10px"}}>
      <h3>Recommend For You </h3>
        <div style={{backgroundColor:'#ffdda1',height:'150px',position:'relative',padding:'1rem',display:'flex',borderRadius:'10px'}}>
          <h4>Plan where you need to Travel</h4>
          <img src={planImg} alt="plan" style={{width:'50%',height:'90%',}} />
        </div>
        <br />
        <div style={{backgroundColor:'#ffdda1',height:'150px',position:'relative',padding:'1rem',display:'flex',borderRadius:'10px'}}>
          <h4>Every Booking, Just a Tap Away </h4>
          <img src={everyBookingsvg} alt="plan" style={{width:'50%',height:'90%',}} />
        </div>
        <br />
        <div style={{backgroundColor:'#ffdda1',height:'150px',position:'relative',padding:'1rem',display:'flex',borderRadius:'10px'}}>
          <h4>Manage Your Adventures, Stress-Free.</h4>
          <img src={stressFreesvg} alt="plan" style={{width:'50%',height:'90%',}} />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default HomePage
