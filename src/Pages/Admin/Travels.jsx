import React from 'react';
import Header from '../../Components/header/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../../Components/footer/Footer';
import { Link } from 'react-router-dom';

const Travels = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F3E8D6', }}>
      <Header title='Travel' arrow={false}/>
      <div style={{ flex: '1', padding: '1rem 2rem', display: 'grid', gap: '1rem' }}>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <h5>View Map</h5>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.020241726515!2d-122.4194150846825!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df9a4c2b%3A0x233f35adcf2fa51!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1631495819736!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <h5>Quick Links</h5>
        <Link to='/Explore'>
          <Button style={{ backgroundColor: '#f08e2d', color: 'black', width: '100%' }}>Explore</Button>
        </Link>
        <Link to='/Booktickets'>
          <Button style={{ backgroundColor: '#f08e2d', color: 'black', width: '100%' }}>Book Tickets</Button>
        </Link>
        <Link to='/HotelBookHome'>
          <Button style={{ backgroundColor: '#f08e2d', color: 'black', width: '100%' }}>Accommodations</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Travels;
