import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ecomonyseat from '../../assets/ecomonyseat.png'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Button } from 'react-bootstrap';


const BusSeats = () => {

  const reservedSeats = [5, 7, 12,26];

  const [selectedSeats, setSelectedseats] = useState([]); // Initialize the state as an empty array

  const addNumber = (seatNumber) => {
    // Use setSelectedseats to update the array immutably
    setSelectedseats((prevSeatNumbers) => [...prevSeatNumbers, seatNumber]);
  };

  const isNumberOccupied = (seatNumber, occupiedArray) => {
    return occupiedArray.includes(seatNumber);
  };

  // user select and undo seats
  const toggleNumber = (newSeatNumber) => {
    setSelectedseats((prevSeatNumbers) => {
      if (prevSeatNumbers.includes(newSeatNumber)) {
        return prevSeatNumbers.filter((num) => num !== newSeatNumber);
      } else {
        return [...prevSeatNumbers, newSeatNumber];
      }
    });
  };

  return (
    <div style={{backgroundColor:'#F3E8D6',height:'100%',paddingTop:'3rem'}}>
      <div className="d-flex align-items-center mb-4 ps-4">
        <Link to="/Homepage">
          <FaArrowLeft className="fs-4 me-3 text-warning" />
        </Link>
        <h2 className="text-dark">Select Seats</h2>
      </div>
      <section style={{padding:'0 2rem'}}>
        <img src={ecomonyseat} alt="" style={{ width: '100%' }} />
        <h3><b>Economy Class Seat</b></h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: '18px', height: '18px', backgroundColor: '#7881f2', borderRadius: '50%' }}></div>
          <span>selected</span>
          <div style={{ width: '18px', height: '18px', backgroundColor: 'gray', borderRadius: '50%' }}></div>
          <span>Emergency exit</span>
          <div style={{ width: '18px', height: '18px', backgroundColor: 'gainsboro', borderRadius: '50%' }}></div>
          <span>Reserved</span>
        </div>
      </section>
      {/* seat */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span></span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
        </div>
        {/* row 1 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(1, reservedSeats)}
            onClick={() => toggleNumber(1)}
            style={{ backgroundColor: isNumberOccupied(1, reservedSeats) || selectedSeats.includes(1) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(2, reservedSeats)}
            onClick={() => toggleNumber(2)}
            style={{ backgroundColor: isNumberOccupied(2, reservedSeats) ||  selectedSeats.includes(2) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(3, reservedSeats)}
            onClick={() => toggleNumber(3)}
            style={{ backgroundColor: isNumberOccupied(3, reservedSeats) ||  selectedSeats.includes(3) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>1</div>
          <button 
            disabled={isNumberOccupied(4, reservedSeats)}
            onClick={() => toggleNumber(4)}
            style={{ backgroundColor: isNumberOccupied(4, reservedSeats) ||  selectedSeats.includes(4) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(5, reservedSeats)}
            onClick={() => toggleNumber(5)}
            style={{ backgroundColor: isNumberOccupied(5, reservedSeats) ||  selectedSeats.includes(5) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(6, reservedSeats)}
            onClick={() => toggleNumber(6)}
            style={{ backgroundColor: isNumberOccupied(6, reservedSeats)|| selectedSeats.includes(6) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 2 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(7, reservedSeats)}
            onClick={() => toggleNumber(7)}
            style={{ backgroundColor: isNumberOccupied(7, reservedSeats) || selectedSeats.includes(7) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(8, reservedSeats)}
            onClick={() => toggleNumber(8)}
            style={{ backgroundColor: isNumberOccupied(8, reservedSeats) ||  selectedSeats.includes(8) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(9, reservedSeats)}
            onClick={() => toggleNumber(9)}
            style={{ backgroundColor: isNumberOccupied(9, reservedSeats) ||  selectedSeats.includes(9) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>2</div>
          <button 
            disabled={isNumberOccupied(10, reservedSeats)}
            onClick={() => toggleNumber(10)}
            style={{ backgroundColor: isNumberOccupied(10, reservedSeats) ||  selectedSeats.includes(10) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(11, reservedSeats)}
            onClick={() => toggleNumber(11)}
            style={{ backgroundColor: isNumberOccupied(11, reservedSeats) ||  selectedSeats.includes(11) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(12, reservedSeats)}
            onClick={() => toggleNumber(12)}
            style={{ backgroundColor: isNumberOccupied(12, reservedSeats)|| selectedSeats.includes(12) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 3 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(13, reservedSeats)}
            onClick={() => toggleNumber(13)}
            style={{ backgroundColor: isNumberOccupied(13, reservedSeats) || selectedSeats.includes(13) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(14, reservedSeats)}
            onClick={() => toggleNumber(14)}
            style={{ backgroundColor: isNumberOccupied(14, reservedSeats) ||  selectedSeats.includes(14) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(15, reservedSeats)}
            onClick={() => toggleNumber(15)}
            style={{ backgroundColor: isNumberOccupied(15, reservedSeats) ||  selectedSeats.includes(15) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>3</div>
          <button 
            disabled={isNumberOccupied(16, reservedSeats)}
            onClick={() => toggleNumber(16)}
            style={{ backgroundColor: isNumberOccupied(16, reservedSeats) ||  selectedSeats.includes(16) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(17, reservedSeats)}
            onClick={() => toggleNumber(17)}
            style={{ backgroundColor: isNumberOccupied(17, reservedSeats) ||  selectedSeats.includes(17) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(18, reservedSeats)}
            onClick={() => toggleNumber(18)}
            style={{ backgroundColor: isNumberOccupied(18, reservedSeats)|| selectedSeats.includes(18) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 4 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(19, reservedSeats)}
            onClick={() => toggleNumber(19)}
            style={{ backgroundColor: isNumberOccupied(19, reservedSeats) || selectedSeats.includes(19) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(20, reservedSeats)}
            onClick={() => toggleNumber(20)}
            style={{ backgroundColor: isNumberOccupied(20, reservedSeats) ||  selectedSeats.includes(20) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(21, reservedSeats)}
            onClick={() => toggleNumber(21)}
            style={{ backgroundColor: isNumberOccupied(21, reservedSeats) ||  selectedSeats.includes(21) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>4</div>
          <button 
            disabled={isNumberOccupied(22, reservedSeats)}
            onClick={() => toggleNumber(22)}
            style={{ backgroundColor: isNumberOccupied(22, reservedSeats) ||  selectedSeats.includes(22) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(23, reservedSeats)}
            onClick={() => toggleNumber(23)}
            style={{ backgroundColor: isNumberOccupied(23, reservedSeats) ||  selectedSeats.includes(23) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(24, reservedSeats)}
            onClick={() => toggleNumber(24)}
            style={{ backgroundColor: isNumberOccupied(24, reservedSeats)|| selectedSeats.includes(24) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 5 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(25, reservedSeats)}
            onClick={() => toggleNumber(25)}
            style={{ backgroundColor: isNumberOccupied(25, reservedSeats) || selectedSeats.includes(25) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(26, reservedSeats)}
            onClick={() => toggleNumber(26)}
            style={{ backgroundColor: isNumberOccupied(26, reservedSeats) ||  selectedSeats.includes(26) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(27, reservedSeats)}
            onClick={() => toggleNumber(27)}
            style={{ backgroundColor: isNumberOccupied(27, reservedSeats) ||  selectedSeats.includes(27) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>5</div>
          <button 
            disabled={isNumberOccupied(28, reservedSeats)}
            onClick={() => toggleNumber(28)}
            style={{ backgroundColor: isNumberOccupied(28, reservedSeats) ||  selectedSeats.includes(28) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(29, reservedSeats)}
            onClick={() => toggleNumber(29)}
            style={{ backgroundColor: isNumberOccupied(29, reservedSeats) ||  selectedSeats.includes(29) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(30, reservedSeats)}
            onClick={() => toggleNumber(30)}
            style={{ backgroundColor: isNumberOccupied(30, reservedSeats)|| selectedSeats.includes(30) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 6 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(31, reservedSeats)}
            onClick={() => toggleNumber(31)}
            style={{ backgroundColor: isNumberOccupied(31, reservedSeats) || selectedSeats.includes(31) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(32, reservedSeats)}
            onClick={() => toggleNumber(32)}
            style={{ backgroundColor: isNumberOccupied(32, reservedSeats) ||  selectedSeats.includes(32) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(33, reservedSeats)}
            onClick={() => toggleNumber(33)}
            style={{ backgroundColor: isNumberOccupied(33, reservedSeats) ||  selectedSeats.includes(33) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>6</div>
          <button 
            disabled={isNumberOccupied(34, reservedSeats)}
            onClick={() => toggleNumber(34)}
            style={{ backgroundColor: isNumberOccupied(34, reservedSeats) ||  selectedSeats.includes(34) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(35, reservedSeats)}
            onClick={() => toggleNumber(35)}
            style={{ backgroundColor: isNumberOccupied(35, reservedSeats) ||  selectedSeats.includes(35) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(56, reservedSeats)}
            onClick={() => toggleNumber(56)}
            style={{ backgroundColor: isNumberOccupied(56, reservedSeats)|| selectedSeats.includes(56) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 7 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(37, reservedSeats)}
            onClick={() => toggleNumber(37)}
            style={{ backgroundColor: isNumberOccupied(37, reservedSeats) || selectedSeats.includes(37) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(38, reservedSeats)}
            onClick={() => toggleNumber(38)}
            style={{ backgroundColor: isNumberOccupied(38, reservedSeats) ||  selectedSeats.includes(38) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(39, reservedSeats)}
            onClick={() => toggleNumber(39)}
            style={{ backgroundColor: isNumberOccupied(39, reservedSeats) ||  selectedSeats.includes(39) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>7</div>
          <button 
            disabled={isNumberOccupied(40, reservedSeats)}
            onClick={() => toggleNumber(40)}
            style={{ backgroundColor: isNumberOccupied(40, reservedSeats) ||  selectedSeats.includes(40) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(41, reservedSeats)}
            onClick={() => toggleNumber(41)}
            style={{ backgroundColor: isNumberOccupied(41, reservedSeats) ||  selectedSeats.includes(41) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(42, reservedSeats)}
            onClick={() => toggleNumber(42)}
            style={{ backgroundColor: isNumberOccupied(42, reservedSeats)|| selectedSeats.includes(42) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 8 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(43, reservedSeats)}
            onClick={() => toggleNumber(43)}
            style={{ backgroundColor: isNumberOccupied(43, reservedSeats) || selectedSeats.includes(43) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(44, reservedSeats)}
            onClick={() => toggleNumber(44)}
            style={{ backgroundColor: isNumberOccupied(44, reservedSeats) ||  selectedSeats.includes(44) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(45, reservedSeats)}
            onClick={() => toggleNumber(45)}
            style={{ backgroundColor: isNumberOccupied(45, reservedSeats) ||  selectedSeats.includes(45) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>8</div>
          <button 
            disabled={isNumberOccupied(46, reservedSeats)}
            onClick={() => toggleNumber(46)}
            style={{ backgroundColor: isNumberOccupied(46, reservedSeats) ||  selectedSeats.includes(46) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(47, reservedSeats)}
            onClick={() => toggleNumber(47)}
            style={{ backgroundColor: isNumberOccupied(47, reservedSeats) ||  selectedSeats.includes(47) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(48, reservedSeats)}
            onClick={() => toggleNumber(48)}
            style={{ backgroundColor: isNumberOccupied(48, reservedSeats)|| selectedSeats.includes(48) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 9 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(49, reservedSeats)}
            onClick={() => toggleNumber(49)}
            style={{ backgroundColor: isNumberOccupied(49, reservedSeats) || selectedSeats.includes(49) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(50, reservedSeats)}
            onClick={() => toggleNumber(50)}
            style={{ backgroundColor: isNumberOccupied(50, reservedSeats) ||  selectedSeats.includes(50) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(51, reservedSeats)}
            onClick={() => toggleNumber(51)}
            style={{ backgroundColor: isNumberOccupied(51, reservedSeats) ||  selectedSeats.includes(51) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>9</div>
          <button 
            disabled={isNumberOccupied(52, reservedSeats)}
            onClick={() => toggleNumber(52)}
            style={{ backgroundColor: isNumberOccupied(52, reservedSeats) ||  selectedSeats.includes(52) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(53, reservedSeats)}
            onClick={() => toggleNumber(53)}
            style={{ backgroundColor: isNumberOccupied(53, reservedSeats) ||  selectedSeats.includes(53) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(54, reservedSeats)}
            onClick={() => toggleNumber(54)}
            style={{ backgroundColor: isNumberOccupied(54, reservedSeats)|| selectedSeats.includes(54) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 10 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(55, reservedSeats)}
            onClick={() => toggleNumber(55)}
            style={{ backgroundColor: isNumberOccupied(55, reservedSeats) || selectedSeats.includes(55) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(56, reservedSeats)}
            onClick={() => toggleNumber(56)}
            style={{ backgroundColor: isNumberOccupied(56, reservedSeats) ||  selectedSeats.includes(56) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(57, reservedSeats)}
            onClick={() => toggleNumber(57)}
            style={{ backgroundColor: isNumberOccupied(57, reservedSeats) ||  selectedSeats.includes(57) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>10</div>
          <button 
            disabled={isNumberOccupied(58, reservedSeats)}
            onClick={() => toggleNumber(58)}
            style={{ backgroundColor: isNumberOccupied(58, reservedSeats) ||  selectedSeats.includes(58) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(59, reservedSeats)}
            onClick={() => toggleNumber(59)}
            style={{ backgroundColor: isNumberOccupied(59, reservedSeats) ||  selectedSeats.includes(59) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(60, reservedSeats)}
            onClick={() => toggleNumber(60)}
            style={{ backgroundColor: isNumberOccupied(60, reservedSeats)|| selectedSeats.includes(60) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 11 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(61, reservedSeats)}
            onClick={() => toggleNumber(61)}
            style={{ backgroundColor: isNumberOccupied(61, reservedSeats) || selectedSeats.includes(61) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(62, reservedSeats)}
            onClick={() => toggleNumber(62)}
            style={{ backgroundColor: isNumberOccupied(62, reservedSeats) ||  selectedSeats.includes(62) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(63, reservedSeats)}
            onClick={() => toggleNumber(63)}
            style={{ backgroundColor: isNumberOccupied(63, reservedSeats) ||  selectedSeats.includes(63) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>11</div>
          <button 
            disabled={isNumberOccupied(64, reservedSeats)}
            onClick={() => toggleNumber(64)}
            style={{ backgroundColor: isNumberOccupied(64, reservedSeats) ||  selectedSeats.includes(64) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(65, reservedSeats)}
            onClick={() => toggleNumber(65)}
            style={{ backgroundColor: isNumberOccupied(65, reservedSeats) ||  selectedSeats.includes(65) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(66, reservedSeats)}
            onClick={() => toggleNumber(66)}
            style={{ backgroundColor: isNumberOccupied(66, reservedSeats)|| selectedSeats.includes(66) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 12 */}
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'70%',margin:'0 auto',backgroundColor:'white',padding:'5px 1rem' }}>
          <button 
            disabled={isNumberOccupied(67, reservedSeats)}
            onClick={() => toggleNumber(67)}
            style={{ backgroundColor: isNumberOccupied(67, reservedSeats) || selectedSeats.includes(67) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(68, reservedSeats)}
            onClick={() => toggleNumber(68)}
            style={{ backgroundColor: isNumberOccupied(68, reservedSeats) ||  selectedSeats.includes(68) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(69, reservedSeats)}
            onClick={() => toggleNumber(69)}
            style={{ backgroundColor: isNumberOccupied(69, reservedSeats) ||  selectedSeats.includes(69) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px",display:'flex',justifyContent:'center',alignItems:'center' }}>12</div>
          <button 
            disabled={isNumberOccupied(70, reservedSeats)}
            onClick={() => toggleNumber(70)}
            style={{ backgroundColor: isNumberOccupied(70, reservedSeats) ||  selectedSeats.includes(70) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(71, reservedSeats)}
            onClick={() => toggleNumber(71)}
            style={{ backgroundColor: isNumberOccupied(71, reservedSeats) ||  selectedSeats.includes(71) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
          <button 
            disabled={isNumberOccupied(72, reservedSeats)}
            onClick={() => toggleNumber(72)}
            style={{ backgroundColor: isNumberOccupied(72, reservedSeats)|| selectedSeats.includes(72) ? '#7881f2' : '#e9e8fc',width: "30px", height: '40px',borderRadius: "8px" }}>
          </button>
        </div>
      </section>
        <div style={{padding:'1rem 2rem'}}>
          <Button style={{ backgroundColor: '#f08e2d'  , width:'100%'}}>Continue</Button>
        </div>
  
    </div>
  )
}


export default BusSeats
