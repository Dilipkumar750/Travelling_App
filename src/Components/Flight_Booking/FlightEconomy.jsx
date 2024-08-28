import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ecomonyseat from '../../assets/ecomonyseat.png'

const FlightEconomy = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <Link to="/Homepage">
          <FaArrowLeft className="fs-4 me-3 text-warning" />
        </Link>
        <h2 className="text-dark">Flight Details</h2>
      </div>
      <section>
        <img src={ecomonyseat} alt="" style={{width:'100%'}} />
        <h3><b>Economy Class Seat</b></h3>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{width:'18px',height:'18px',backgroundColor:'#7881f2',borderRadius:'50%'}}></div>
          <span>Selected</span>
          <div style={{width:'18px',height:'18px',backgroundColor:'gray',borderRadius:'50%'}}></div>
          <span>Emergency exit</span>
          <div style={{width:'18px',height:'18px',backgroundColor:'gainsboro',borderRadius:'50%'}}></div>
          <span>Reserved</span>
        </div>
      </section>
      {/* seat */}
      <section>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <button style={blueSeat}></button>
          <button style={blueSeat}></button>
          <button style={blueSeat}></button>
          <div style={{width:"40px",height:'40px',border:0,borderRadius:"8px"}}>6</div>
          <button style={blueSeat}></button>
          <button style={blueSeat}></button>
          <button style={blueSeat}></button>
        </div>
      </section>
    </div>
  )
}
const blueSeat ={
  width:"30px",height:'40px',backgroundColor:'#7881f2',border:0,borderRadius:"8px"
}

export default FlightEconomy
