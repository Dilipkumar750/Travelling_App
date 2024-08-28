import React from 'react';
import { Button, Container } from 'react-bootstrap';
import reject from '../../assets/reject.jpg';
import { Link } from 'react-router-dom';

const Reject = ({ onDone }) => {
  return (
    <Container className="text-center py-4">
      <img src={reject} alt="Rejected" className="img-fluid mb-4" style={{ maxWidth: '100%' }} />
      <Link to='/PendingRequests'>
      <Button variant="danger" onClick={onDone}>Done</Button></Link>
    </Container>
  );
};

export default Reject;
