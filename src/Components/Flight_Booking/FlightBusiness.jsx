import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link,useNavigate,useParams } from 'react-router-dom';
import ecomonyseat from '../../assets/flightBusinessSeat.png'
import flightBody from '../../assets/flightBodycroped.png'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { API_URL } from '../../constant';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const FlightBusiness = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [flightData, setFlightData] = useState()
  const storedData = JSON.parse(localStorage.getItem("user"));

  const reservedSeats = flightData?.seats || [];

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

  
  useEffect(() => {
    handleSubmit()
  }, [])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`${API_URL}/booking/flight/get/${id}`);
      setFlightData(response?.data[0])
    } catch (err) {
      console.log('something went wrong , try again');
    }
  };

  const goBack = () => {
    navigate(-1);
  };
// console.log(flightData)
  const handleSeatBook = async () => {
    storedData.selectedSeats = selectedSeats;
    storedData.vehicleId = flightData._id;
    storedData.vehicleName = flightData.name;
    storedData.duration = flightData.duration;

    localStorage.setItem('user', JSON.stringify(storedData));
    navigate(`/FlightPayment/${id}`)
    // try {
    //   const response = await axios.post(`${API_URL}/booking/flight/book`, {
    //     travelerCount:selectedSeats.length,
    //     classType:'Economy',
    //     selectedSeats,
    //     userName: storedData.username,
    //     userEmail:storedData.email,
    //     id
    //   });
    //   console.log(response)
    // } catch (err) {
    //   console.log(err)
    //   console.log('something went wrong , try again');
    // }
  };

  return (
    <div style={{ backgroundColor: '#F3E8D6', height: '100%',paddingTop:'3rem' }}>
      <div className="d-flex align-items-center mb-4 ps-4">
          <FaArrowLeft className="fs-4 me-3 text-warning" onClick={goBack} />
        <h2 className="text-dark">Select Seats</h2>
      </div>
      <section style={{ padding: '0 2rem' }}>
        <img src={ecomonyseat} alt="" style={{ width: '100%' }} />
        <h3><b>Bussiness Class Seat</b></h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: '18px', height: '18px', backgroundColor: '#5de953', borderRadius: '50%' }}></div>
          <span>selected</span>
          <div style={{ width: '18px', height: '18px', backgroundColor: 'gray', borderRadius: '50%' }}></div>
          <span>Emergency exit</span>
          <div style={{ width: '18px', height: '18px', backgroundColor: 'gainsboro', borderRadius: '50%' }}></div>
          <span>Reserved</span>
        </div>
      </section>
      {/* seat */}
      <section>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={flightBody}
            alt="Flight Body"
            style={{
              width: '70%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
        </div>
        {/* row 1 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', margin: '0 auto', backgroundColor: 'white', padding: '5px 1rem' }}>
          <button
            disabled={isNumberOccupied(1, reservedSeats)}
            onClick={() => toggleNumber(1)}
            style={{ backgroundColor: isNumberOccupied(1, reservedSeats) || selectedSeats.includes(1) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(2, reservedSeats)}
            onClick={() => toggleNumber(2)}
            style={{ backgroundColor: isNumberOccupied(2, reservedSeats) || selectedSeats.includes(2) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</div>
          <button
            disabled={isNumberOccupied(3, reservedSeats)}
            onClick={() => toggleNumber(3)}
            style={{ backgroundColor: isNumberOccupied(3, reservedSeats) || selectedSeats.includes(3) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(4, reservedSeats)}
            onClick={() => toggleNumber(4)}
            style={{ backgroundColor: isNumberOccupied(4, reservedSeats) || selectedSeats.includes(4) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 2 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', margin: '0 auto', backgroundColor: 'white', padding: '5px 1rem' }}>
          <button
            disabled={isNumberOccupied(5, reservedSeats)}
            onClick={() => toggleNumber(5)}
            style={{ backgroundColor: isNumberOccupied(5, reservedSeats) || selectedSeats.includes(5) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(6, reservedSeats)}
            onClick={() => toggleNumber(6)}
            style={{ backgroundColor: isNumberOccupied(6, reservedSeats) || selectedSeats.includes(6) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
          <button
            disabled={isNumberOccupied(7, reservedSeats)}
            onClick={() => toggleNumber(7)}
            style={{ backgroundColor: isNumberOccupied(7, reservedSeats) || selectedSeats.includes(7) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(8, reservedSeats)}
            onClick={() => toggleNumber(8)}
            style={{ backgroundColor: isNumberOccupied(8, reservedSeats) || selectedSeats.includes(8) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 3 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', margin: '0 auto', backgroundColor: 'white', padding: '5px 1rem' }}>
          <button
            disabled={isNumberOccupied(9, reservedSeats)}
            onClick={() => toggleNumber(9)}
            style={{ backgroundColor: isNumberOccupied(9, reservedSeats) || selectedSeats.includes(9) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(10, reservedSeats)}
            onClick={() => toggleNumber(10)}
            style={{ backgroundColor: isNumberOccupied(10, reservedSeats) || selectedSeats.includes(10) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
          <button
            disabled={isNumberOccupied(11, reservedSeats)}
            onClick={() => toggleNumber(11)}
            style={{ backgroundColor: isNumberOccupied(11, reservedSeats) || selectedSeats.includes(11) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(12, reservedSeats)}
            onClick={() => toggleNumber(12)}
            style={{ backgroundColor: isNumberOccupied(12, reservedSeats) || selectedSeats.includes(12) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 4 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', margin: '0 auto', backgroundColor: 'white', padding: '5px 1rem' }}>
          <button
            disabled={isNumberOccupied(13, reservedSeats)}
            onClick={() => toggleNumber(13)}
            style={{ backgroundColor: isNumberOccupied(13, reservedSeats) || selectedSeats.includes(13) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(14, reservedSeats)}
            onClick={() => toggleNumber(14)}
            style={{ backgroundColor: isNumberOccupied(14, reservedSeats) || selectedSeats.includes(14) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>4</div>
          <button
            disabled={isNumberOccupied(15, reservedSeats)}
            onClick={() => toggleNumber(15)}
            style={{ backgroundColor: isNumberOccupied(15, reservedSeats) || selectedSeats.includes(15) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(16, reservedSeats)}
            onClick={() => toggleNumber(16)}
            style={{ backgroundColor: isNumberOccupied(16, reservedSeats) || selectedSeats.includes(16) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
        </div>
        {/* row 5 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', margin: '0 auto', backgroundColor: 'white', padding: '5px 1rem' }}>
          <button
            disabled={isNumberOccupied(17, reservedSeats)}
            onClick={() => toggleNumber(17)}
            style={{ backgroundColor: isNumberOccupied(17, reservedSeats) || selectedSeats.includes(17) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(18, reservedSeats)}
            onClick={() => toggleNumber(18)}
            style={{ backgroundColor: isNumberOccupied(18, reservedSeats) || selectedSeats.includes(18) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <div style={{ width: "40px", height: '40px', border: 0, borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>5</div>
          <button
            disabled={isNumberOccupied(19, reservedSeats)}
            onClick={() => toggleNumber(19)}
            style={{ backgroundColor: isNumberOccupied(19, reservedSeats) || selectedSeats.includes(19) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
          <button
            disabled={isNumberOccupied(20, reservedSeats)}
            onClick={() => toggleNumber(20)}
            style={{ backgroundColor: isNumberOccupied(20, reservedSeats) || selectedSeats.includes(20) ? '#5de953' : '#e9e8fc', width: "30px", height: '40px', borderRadius: "8px" }}>
          </button>
        </div>
      </section>
      <Button style={{ backgroundColor: '#f08e2d', width: '100%', height: '60px', color: 'black',marginTop:"1rem" }} onClick={handleSeatBook}>Continue</Button>
    </div>
  )
}


export default FlightBusiness
