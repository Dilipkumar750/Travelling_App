import React, { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useParams,useNavigate} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Ticketcards from "../TicketCard";
import train from "../../assets/train color.png";
import { API_URL } from '../../constant';
import axios from 'axios';

const TrainDetails = () => {
  const { id } = useParams();
  const [array, setArray] = useState([])
  const navigate = useNavigate();
// console.log(array)
  useEffect(() => {
    handleSubmit()
  }, [])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking/train/get/${id}`);
      setArray(response?.data[0])
    } catch (err) {
      console.log('something went wrong , try again');
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container className="mt-1 mb-1 p-4 rounded" style={{ backgroundColor: '#F3E8D6',height: "100%" }}>
      <div className="d-flex align-items-center mb-4">
          <FaArrowLeft className="fs-4 me-3 text-warning" onClick={goBack} />
        <h2 className="text-dark">Train Details</h2>
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
                <img src={train} alt="train" className="w-75" />
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
                <Form.Control type="time" defaultValue="09:30" />
              </Col>
            </Row>

            <hr />

            <Row className="mb-3">
              <Col>
                <strong>Quota</strong>
                <Form.Control type="text" defaultValue="General Quota" />
              </Col>
              <Col>
                <strong>Coach</strong>
                <Form.Control type="text" defaultValue="S1" />
              </Col>
            </Row>

            <hr />

            <Row className="mb-2">
              <Col><strong>Price</strong></Col>
              <Col className="text-end"><strong className="text-danger">{array.price}</strong></Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={8}>
          {/* Render Payment Methods Here */}
        </Col>
      </Row>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Link to='/Trainlist'>
        <Button
          className="w-100 py-2 rounded-pill"
          style={{backgroundColor: 'transparent', color: 'orange', border: '2px solid #f08e2d'}}
        >
          Cancel
        </Button>
        </Link>
        <Link to={`/TrainSeat/${id}`}>
        <Button
          className="w-100 py-2 rounded-pill"
          style={{backgroundColor: '#f08e2d'}}
        >
          Continue
        </Button>
        </Link>
      </div>
    </Container>
  );
};

export default TrainDetails;
