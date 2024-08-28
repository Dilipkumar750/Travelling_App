import React from 'react';
import { Button, Container } from 'react-bootstrap';
import reject from '../../assets/reject.jpg';

const Reject = ({ onDone }) => {
  return (
    <Container className="text-center py-4">
      <img src={reject} alt="Rejected" className="img-fluid mb-4" style={{ maxWidth: '100%' }} />
      <Button variant="danger" onClick={onDone}>Done</Button>
    </Container>
  );
};

export default Reject;
