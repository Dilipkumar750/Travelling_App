import React from 'react';
import { Button, Container } from 'react-bootstrap';
import approve from '../../assets/approved.jpg';

const Approve = ({ onDone }) => {
  return (
    <Container className="text-center py-4">
      <img src={approve} alt="Approved" className="img-fluid mb-4" style={{ maxWidth: '100%' }} />
      <Button variant="success" onClick={onDone}>Done</Button>
    </Container>
  );
};

export default Approve;
