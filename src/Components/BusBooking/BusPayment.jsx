import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link ,useNavigate,useParams} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import visa from "../../assets/visa.png";
import mastercard from "../../assets/maestro.png";
import paypal from "../../assets/paypal.png";
import phonepe from "../../assets/phonepe.png";
import Ticketcards from "../TicketCard";
import bus from "../../assets/bus-color.png";
import { API_URL } from '../../constant';
import axios from 'axios';

const paymentMethods = [
  { img: visa, alt: "Visa" },
  { img: paypal, alt: "PayPal" },
  { img: mastercard, alt: "Maestro" },
  { img: phonepe, alt: "PhonePe" },
];

const BusPayment = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [flightData, setFlightData] = useState()
  const storedData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    handleSubmit()
  }, [])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking/bus/get/${id}`);
      setFlightData(response?.data[0])
    } catch (err) {
      alert('something went wrong , try again');
    }
  };

  // console.log(storedData)

  const handleSeatBook = async () => {
    try {
      const response = await axios.post(`${API_URL}/booking/bus/book`, {
        travelerCount:storedData?.selectedSeats.length,
        classType:'Economy',
        selectedSeats:storedData?.selectedSeats,
        userName: storedData.username,
        userEmail:storedData.email,
        id,
        vehicleId:storedData.vehicleId,
        vehicleName:storedData.vehicleName,
        duration:storedData.duration
      });
      console.log(response)
      storedData.selectedSeats = [];
      storedData.vehicleId = '';
      storedData.vehicleName = '';
      storedData.duration = '';
      storedData.fromLocation = '';
      storedData.toLocation = '';
      localStorage.setItem('user', JSON.stringify(storedData));
      navigate('/Done')
    } catch (err) {
      console.log(err)
      alert('something went wrong , try again');
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container className="mt-1 mb-4" style={{ padding: '25px', backgroundColor: '#F3E8D6' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: '#ff5f00' }} onClick={goBack} />
        <h2 style={{ color: 'black' }}>Payment</h2>
      </div>

      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Ticketcards color='red' image={bus} width='100px' borderRadius='15px' data={flightData} />
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card className="mb-2" style={{ backgroundColor: '#FAD1D1', padding: '15px' }}>
            <Row className="d-flex justify-content-between align-items-center">
              <Col><strong>Total</strong></Col>
              <Col className="text-end"><strong>₹ {flightData?.price * storedData?.selectedSeats?.length}</strong></Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <h4 className="mt-4">Payment</h4>

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

      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
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
        </Col>
      </Row>
    </Container>
  );
};

export default BusPayment;
