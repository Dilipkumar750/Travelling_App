import React, { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams,useNavigate} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Ticketcards from "../TicketCard";
import flight from "../../assets/flight-color.png";
import { API_URL } from '../../constant';
import axios from 'axios';


const FlightDetails = () => {
  const { id } = useParams();
  const [array, setArray] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    handleSubmit()
  }, [])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking/flight/get/${id}`);
      setArray(response?.data[0])
    } catch (err) {
      alert('something went wrong , try again');
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container className="mt-1 mb-1 p-4 rounded" style={{ backgroundColor: '#fdf6ea', height: "100vh" }}>
      <div className="d-flex align-items-center mb-4">
          <FaArrowLeft className="fs-4 me-3 text-warning" onClick={goBack} />
        <h2 className="text-dark">Flight Details</h2>
      </div>
      <Row className="justify-content-center">
        <Col md={8}>
          <Ticketcards color="red" width="100%" borderRadius="15%" data={array} />

          <Card className="p-3 mt-3 shadow-sm bg-white">
            <Row className="align-items-center mb-1">
              <Col className="text-center">
                <Button
                  variant="link"
                  className="text-danger border-2 border-white rounded-pill p-2 shadow-sm"
                >
                  {array.fromcode}
                </Button>
                <p className="fs-6 mt-2">{array.fromaddress}</p>
              </Col>

              <Col className="text-center position-relative">
                <img src={flight} alt="flight" className="w-75" />
                <hr className="border-dashed border-black my-2" />
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle border-dashed border-warning" style={{ width: '120px', height: '60px', borderTopWidth: '2px', borderBottomWidth: '0' }} />
                <div className="position-absolute bottom-0 start-50 translate-middle-x rounded-bottom-50 border-dashed border-warning" style={{ width: '120px', height: '60px', borderBottomWidth: '2px', borderTopWidth: '0' }} />
              </Col>

              <Col className="text-center">
                <Button
                  variant="link"
                  className="text-danger border-2 border-white rounded-pill p-2 shadow-sm"
                >
                  {array.tocode}
                </Button>
                <p className="fs-6 mt-2">{array.toaddress}</p>
              </Col>
            </Row>

            <hr />

            <Row className="mb-3">
              <Col>
                <strong>Date</strong>
                <Form.Control type="date" defaultValue="2023-05-26" />
              </Col>
              <Col>
                <strong>Time</strong>
                <Form.Control type="time" defaultValue="08:30" />
              </Col>
            </Row>

            <hr />

            <Row className="mb-2">
              <Col><strong>Price</strong></Col>
              <Col className="text-end"><strong className="text-danger">${array.price}</strong></Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={8}>
          {/* Render Payment Methods Here */}
        </Col>
      </Row>

      <div className="d-flex justify-content-center gap-4 mt-3">
        <Link to='/Flightlist'>
          <Button
            className="w-100 py-2 rounded-pill"
            style={{ backgroundColor: 'transparent', color: 'orange', border: '2px solid #f08e2d' }}
          >
            Cancel
          </Button>
        </Link>
        <Link to={`/FlightEconomy/${id}`}>
        <Button
          className="w-100 py-2 rounded-pill"
          style={{ backgroundColor: '#f08e2d', color: 'white' }}
        >
          Continue
        </Button>
        </Link>
      </div>
    </Container>
  );
};

export default FlightDetails;
