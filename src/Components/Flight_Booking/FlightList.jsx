import React from 'react'
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import TicketCard from '../TicketCard';
import { Link ,useNavigate} from 'react-router-dom';


function FlightList() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };
  return (
    <div style={{backgroundColor:"#fdf6ea",padding:'1rem',height:"100vh"}}>
      <div className="d-flex align-items-center mb-4">
          <FaArrowLeft className="fs-4 me-3 text-warning" onClick={goBack} />
        <h2 className="text-dark">Flight Details</h2>
      </div>
      <section>
        <div style={{borderTop:"1px dashed black",borderRadius:'60%',width:'100%',height:'100px',position:'relative'}}>
          <div style={{display:'flex',justifyContent:'space-between',position:'absolute',width:'100%',bottom:'50%'}}>
          <Button
                  variant="link"
                  className="text-danger border-2 border-white rounded-pill p-2 shadow-sm"
                >
                  CHE
                </Button>
                <Button
                  variant="link"
                  className="text-danger border-2 border-white rounded-pill p-2 shadow-sm"
                >
                  BLR
                </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="row g-3">
          <div className="col-6">
            <Button style={{width:'100%',backgroundColor:"white",color:'black',border:'0'}}>16-12-2023</Button>
          </div>
          <div className="col-6">
            <Button style={{width:'100%',backgroundColor:"white",color:'black',border:'0'}}>1 passenger</Button>
          </div>
          <div className="col-6">
            <Button style={{width:'100%',backgroundColor:"#f08e2d",border:'0'}}>Business</Button>
          </div>
          <div className="col-6">
            <Button style={{width:'100%',backgroundColor:"#f08e2d",border:'0'}}>Economy</Button>
          </div>
        </div>
      </section>
      <section style={{display:'grid',gap:'1rem'}}>
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
      </section>
    </div>
  )
}

export default FlightList