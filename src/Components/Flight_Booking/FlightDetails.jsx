import React from 'react'
import TicketCard from '../TicketCard'
import trainImg from '../../assets/train_color.jpeg'


function FlightDetails() {
  return (
    <div style={{backgroundColor:'gainsboro', height:'100vh',padding:'1.2rem'}} >
      <TicketCard image={trainImg} color='red'/>
    </div>
  )
}

export default FlightDetails