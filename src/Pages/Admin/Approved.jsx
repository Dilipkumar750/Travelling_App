import React from 'react';
import { Button, Container } from 'react-bootstrap';
import approve from '../../assets/approved.jpg';
import { Link } from 'react-router-dom';


const Approve = ({ onDone }) => {
  return (
    <Container className="text-center py-4">
      <img src={approve} alt="Approved" className="img-fluid mb-4" style={{ maxWidth: '100%' }} />
      <Link to='/PendingRequests'>
      <Button variant="success" onClick={onDone}>Done</Button></Link>
    </Container>
  );
};

export default Approve;
