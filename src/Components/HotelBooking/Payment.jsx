import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import visa from "../../assets/visa.png";
import mastercard from "../../assets/maestro.png";
import paypal from "../../assets/paypal.png";
import phonepe from "../../assets/phonepe.png";
import Ticketcards from "../TicketCard";
import Hotel from "../../assets/hotel-color.png";
import { API_URL } from '../../constant';
import axios from 'axios';

const paymentMethods = [
  { img: visa, alt: "Visa" },
  { img: paypal, alt: "PayPal" },
  { img: mastercard, alt: "Maestro" },
  { img: phonepe, alt: "PhonePe" },
];

const Payment = () => {
  const navigate = useNavigate();
const storedData = JSON.parse(localStorage.getItem("hotelData"));
const user = JSON.parse(localStorage.getItem("user"));
// console.log(storedData)
    const goBack = () => {
        navigate(-1);
    };

    const handleSeatBook = async () => {
      try {
        const response = await axios.post(`${API_URL}/booking/hotel/book`, {
          storedData,user
        });
        // console.log(response)
        // storedData.selectedSeats = [];
        // storedData.vehicleId = '';
        // storedData.vehicleName = '';
        // storedData.duration = '';
        // storedData.fromLocation = '';
        // storedData.toLocation = '';
        // localStorage.setItem('user', JSON.stringify(storedData));
        // localStorage.removeItem('trainSearchData');
        navigate('/HotelViewTicket')
      } catch (err) {
        console.log(err)
        console.log('something went wrong , try again');
      }
    };


    const goBack = () => {
        navigate(-1);
    };

  return (
    <div>
      <Container className="mt-1 mb-4" style={{ padding: '25px', backgroundColor: '#F3E8D6' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Link to="/Homepage">
            <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: '#ff5f00' }} onClick={goBack} />
          </Link>
          <h2 className="text-right" style={{ color: 'black' }}>
            Payment
          </h2>
        </div>
        
        {/* Ticket Card Section */}
        <Row className="mt-4 justify-content-center">
          <Col md={8}>
          <section style={{backgroundColor:'white',padding:'1rem',position:'relative',height:'130px',borderRadius:'1rem'}}>
            <div className='cardTop'>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <b>{storedData?.formdata?.checkInDate}</b>
                    <p></p>
                    <b>{storedData?.formdata?.checkOutDate}</b>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <b style={{color:'gray'}}>Check In</b>
                    <p></p>
                    <b style={{color:'gray'}}>Check Out</b>
                </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'auto auto auto', justifyContent:'space-between',borderTop:'1px dotted black',padding:'0.5rem'}}>
                <b>Total </b>
                <img src={''} alt="" style={{width:"100%",height:'40%'}} />
                <b>{storedData?.price * storedData?.formdata?.bedsRequired + (storedData?.price * storedData?.formdata?.bedsRequired * storedData?.tax / 100)}</b>
            </div>
        </section>
          </Col>
        </Row>

        {/* Total Amount */}
        <Row className="mt-4 justify-content-center">
          <Col md={8}>
            <Card className="mb-2" style={{ backgroundColor: '#FAD1D1', padding: '15px' }}>
              <Row className="d-flex justify-content-between align-items-center">
                <Col><strong>Total</strong></Col>
                <Col className="text-end"><strong>₹ {storedData?.price * storedData?.formdata?.bedsRequired + (storedData?.price * storedData?.formdata?.bedsRequired * storedData?.tax / 100)}</strong></Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <h4 className="mt-4 text-left">Payment</h4>

        {/* Payment Methods Section */}
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <Row className="g-0">
              {paymentMethods.map((method, index) => (
                <Col md={6} key={index}>
                  <Card className="bg-lightblue mb-2">
                    <Card.Body
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        backgroundColor: 'lightblue',
                        height: '60px',
                        padding: '10px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <img src={method.img} alt={method.alt} style={{ width: '50px' }} />
                      <p>*********0017</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Continue Button */}
        <Row className="justify-content-center mt-5">
          <Col md={6} className="text-center">
          {/* <Link to='/HotelViewTicket'> */}

            <Button
              style={{
                backgroundColor: '#f08e2d',
                width: '100%',
                height: '40px',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
              onClick={handleSeatBook}
            >
              Continue
            </Button>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
