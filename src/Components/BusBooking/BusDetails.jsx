import React, { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams,useNavigate} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import Ticketcards from "../TicketCard";
import bus from "../../assets/bus-color.png"; 
import { API_URL } from '../../constant';
import axios from 'axios';

const BusDetails = () => {
  const { id } = useParams();
  const [array, setArray] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    handleSubmit()
  }, [])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking/bus/get/${id}`);
      setArray(response?.data[0])
    } catch (err) {
      console.log(err);
    }
  };
// console.log(array)
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container className="mt-1 mb-1" style={{ backgroundColor: '#F3E8D6', padding: '20px', borderRadius: '10px',height:'100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px',  }}>
          <FaArrowLeft style={{ fontSize: '24px', marginRight: '15px', color: '#ff5f00' }} onClick={goBack} />
        <h2 style={{ color: 'black' }}>Bus Details</h2>
      </div>
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Ticket Card */}
          <Ticketcards data={array} color="red" width="100%" borderRadius="15%" />

          {/* Ticket Details Card */}
          <Card style={{ padding: '15px', backgroundColor: '#FFFFFF', marginTop: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>

            {/* From and To with Dashed Line */}
            <Row className="align-items-center mb-3">
              <Col className="d-flex flex-column align-items-center">
                <Button
                  variant="link"
                  style={{
                    color: 'red',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: '5px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {array.fromcode}
                </Button>
                <p style={{ fontSize: '15px', margin: '5px 0 0 0' }}>{array.fromaddress}</p>
              </Col>

              <Col className="text-center" style={{ position: 'relative' }}>
                <img src={bus} alt="bus" style={{ width: '70%' }} />
                <hr style={{ borderTop: '3px dashed black', margin: '10px 0' }} />
              </Col>

              <Col className="d-flex flex-column align-items-center">
                <Button
                  variant="link"
                  style={{
                    color: 'red',
                    border: '2px solid white',
                    borderRadius: '20px',
                    padding: '5px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {array.tocode}
                </Button>
                <p style={{ fontSize: '15px', margin: '5px 0 0 0' }}>{array.toaddress}</p>
              </Col>
            </Row>

            {/* Horizontal Line */}
            <hr />

            {/* Date and Time Input */}
            <Row className="mb-3 d-flex">
              <Col className="d-flex flex-column">
                <strong>Date</strong>
                <Form.Control type="date" defaultValue="2024-05-26" />
              </Col>
              <Col className="d-flex flex-column">
                <strong>Time</strong>
                <Form.Control type="time" defaultValue="08:30" />
              </Col>
            </Row>

            {/* Horizontal Line */}
            <hr />

            {/* Price Display */}
            <Row className="mb-2">
              <Col><strong>Price</strong></Col>
              <Col className="text-end"><strong style={{ color: 'red' }}>₹ {array.price}</strong></Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Payment Section */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Row className="g-0">
            {/* Render Payment Methods Here */}
          </Row>
        </Col>
      </Row>

      {/* Continue and Cancel Buttons */}
      <div className="d-flex justify-content-center gap-3 mt-3">
        <Link to='/Buslist'>
        <Button
          style={{
            width: '100%',
            height: '40px',
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'transparent',
            color: 'orange',
            border: '2px solid orange'
          }}
        >
          Cancel
        </Button>
        </Link>
        <Link to={`/Busseats/${id}`}>
        <Button
          style={{
            backgroundColor: '#f08e2d',
            width: '100%',
            height: '40px',
            padding: '10px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Continue
        </Button>
        </Link>
      </div>
    </Container>
  );
};

export default BusDetails;
