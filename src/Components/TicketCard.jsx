import React from 'react'
import trainImg from '../assets/train_color.jpeg'
function TicketCard({image='',color='black',data=''}) {
  return (
    <>
        <section style={{backgroundColor:'white',padding:'1rem',position:'relative',height:'130px',borderRadius:'1rem'}}>
            <div className='cardTop'>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <b style={{color}}>{data.departure}</b>
                    <p></p>
                    <b style={{color}}>{data.arrival}</b>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <b style={{color:'gray'}}>{data.fromcode}</b>
                    <p style={{color}}>{data.duration}</p>
                    <b style={{color:'gray'}}>{data.tocode}</b>
                </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'auto auto auto', justifyContent:'space-between',borderTop:'1px dotted black',padding:'0.5rem'}}>
                <b style={{color}}>{data.name}</b>
                <img src={image} alt="" style={{width:"100%",height:'40%'}} />
                <b style={{color}}>${data.price}</b>
            </div>
        </section>
    </>
  )
}

export default TicketCard