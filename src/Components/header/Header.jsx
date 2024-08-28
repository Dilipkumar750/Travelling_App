import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };
  return (
    <header style={{backgroundColor:'#f08e2d' , height:'100px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'0 0 70px 70px'}}>
        <div style={{width:'80%',display:'flex',justifyContent:'space-between'}}>
        <AiOutlineArrowLeft style={{color:'white',fontSize:'1.5rem',fontWeight:'500',marginTop:'8px'}} onClick={goBack} />
        <p style={{flexBasis:'80%',color:'white',fontSize:'1.5rem',fontWeight:'500'}}>Header</p>
        <AiOutlineUser style={{color:'white',fontSize:'1.5rem',fontWeight:'500',marginTop:'8px'}} />
        </div>
    </header>
  )
}

export default Header