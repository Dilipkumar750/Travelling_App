import React from 'react';
import { Button, Container } from 'react-bootstrap';
import approve from '../../assets/approved.jpg';
import { Link ,useNavigate,useParams } from 'react-router-dom';
import { API_URL } from '../../constant';
import axios from 'axios';

const Approve = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const approveBooking = async () => {
    try {
      const response = await axios.put(`${API_URL}/booking/approve/${id}`);
      // console.log(response);
      navigate('/PendingRequests')
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <Container className="text-center py-4">
      <img src={approve} alt="Approved" className="img-fluid mb-4" style={{ maxWidth: '100%' }} />
      <Button variant="success" onClick={approveBooking} >Done</Button>
    </Container>
  );
};

export default Approve;
