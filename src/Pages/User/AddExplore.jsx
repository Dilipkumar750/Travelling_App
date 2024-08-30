import React, { useState, useRef } from 'react';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import { Form, Button, Container, Card } from 'react-bootstrap';
import plus from '../../assets/plus.png';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const AddExplore = () => {
  // Use state to store selected images
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRefs = useRef([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const handleClose = () => {
    setShow(false)
    navigate('/UserHomePage')
  };
  const handleShow = () => setShow(true);

  // Handle file input click
  const handleCardClick = (index) => {
    fileInputRefs.current[index].click();
  };

  // Handle file selection
  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file
      const fileUrl = URL.createObjectURL(file);
      
      // Update state with the selected image
      setSelectedImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = fileUrl;
        return updatedImages;
      });
    }
  };

  // Define transport options with images
  const transportOptions = [
    { image: plus },
    { image: plus },
  ];

  return (
    <div>
      <Header title='Add Explore' arrow={false} />
      <Container className="mt-2 pb-5 mb-5">
        <Form>
          {/* City of Landmark */}
          <Form.Group controlId="formCity">
            <Form.Label><h6>City of Landmark</h6></Form.Label>
            <Form.Control
              type="text"
              className="bg-light border-dark rounded-3 mb-2"
            />
          </Form.Group>

          {/* Description */}
          <Form.Group controlId="formDescription">
            <Form.Label><h6>Description</h6></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="bg-light border-dark rounded-3 mb-2"
              style={{ height: '100px' }} // Set fixed height
            />
          </Form.Group>

          {/* Category */}
          <Form.Group controlId="formCategory">
            <Form.Label><h6>Category</h6></Form.Label>
            <Form.Control
              type="text"
              className="bg-light border-dark rounded-3 mb-3"
            />
          </Form.Group>

          {/* Transport Options Cards */}
          <h6>Add Images</h6>
          <div className="d-grid gap-4 mb-2 mt-2" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {transportOptions.map((option, index) => (
              <Card
                key={index}
                className="border-2 border-warning rounded-3 p-4"
                style={{ backgroundColor: '#F3E8D6', cursor: 'pointer' }}
                onClick={() => handleCardClick(index)}
              >
                <Card.Img 
                  variant="top"
                  src={selectedImages[index] || option.image}
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto', backgroundColor: '#f08e2d' }}
                />
                {/* Hidden file input */}
                <input
                  type="file"
                  ref={(el) => fileInputRefs.current[index] = el}
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(index, e)} 
                />
              </Card>
            ))}
          </div>

          <Button
            variant="primary"
            className="w-100 rounded-3"
            style={{ backgroundColor: '#f08e2d' }}
            onClick={handleShow}
          >
            Submit
          </Button>
        </Form>
      </Container>
      <div style={{bottom: 0, position:'fixed', width: '100%'}}>
        <Footer/> 
        </div>
        <Modal show={show} onHide={handleClose} style={{marginTop:'15rem'}}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>successfully added</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddExplore;
