import React from 'react'
import Footer from '../../Components/footer/Footer';
import Header from '../../Components/header/Header'
import Form from 'react-bootstrap/Form';


function Explore() {
  return (
    <div>
      <Header/>
      <Form.Control
        type="text"
        placeholder="Search"
        className=" mr-sm-2"
      />
    </div>
  )
}

export default Explore