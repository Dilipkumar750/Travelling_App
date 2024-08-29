import DoneImg from "../assets/done.png";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Done = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect to the Home page after 2 seconds
    const timer = setTimeout(() => {
      navigate("/FlightViewTicket"); // Replace '/home' with the actual path to your Home page
    }, 2000);

    // Clear the timeout if the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={DoneImg}
        alt="Done"
        style={{ width: '100%', height: 'auto', marginTop: '50%', marginBottom: '20px' }}
      /><br/>
      {/* <button
        onClick={() => window.location.href = '/BookTickets'} 
        style={{
          backgroundColor: '#f08e2d', 
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          textAlign: 'center'
        }}
      >
        Back To Home
      </button> */}
    </div>
  );
}

export default Done;
