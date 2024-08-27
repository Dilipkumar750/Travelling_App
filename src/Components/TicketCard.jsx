import React from 'react'
import trainImg from '../assets/train_color.jpeg'
function TicketCard({image='',color='black'}) {
  return (
    <>
        <section style={{backgroundColor:'white',padding:'1rem',position:'relative',height:'130px',borderRadius:'1rem'}}>
            <div className='cardTop'>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <b style={{color}}>7.05 am</b>
                    <p></p>
                    <b style={{color}}>7.05 am</b>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <b style={{color:'gray'}}>CHE</b>
                    <p style={{color}}>13:00</p>
                    <b style={{color:'gray'}}>BLR</b>
                </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'auto auto auto', justifyContent:'space-between',borderTop:'1px dotted black',padding:'0.5rem'}}>
                <b style={{color}}>Air canada</b>
                <img src={image} alt="" style={{width:"100%",height:'40%'}} />
                <b style={{color}}>$1400</b>
            </div>
        </section>
    </>
  )
}

export default TicketCard