import React from 'react';
import DoneImg from "../assets/done.png";

const Done = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={DoneImg}
        alt="Done"
        style={{ width: '100%', height: 'auto', marginTop: '50%', marginBottom: '20px' }}
      /><br/>
      <button
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
      </button>
    </div>
  );
}

export default Done;
