import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoArrowRight } from "react-icons/go";
import Header from "../../Components/header/Header";
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon
import { API_URL } from '../../constant';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

const TrainDate = () => {


  const navigate = useNavigate();
  const [array, setArray] = useState([])
// console.log(array)
  const storedData = JSON.parse(localStorage.getItem("trainSearchData"));
  const from = storedData.fromLocation
  const to = storedData.toLocation
  if (!storedData) {
    alert("something went wrong try again");
    return null;
  }

  useEffect(() => {
      handleSubmit()
  }, [storedData])

  const handleSubmit = async () => {
      try {
        const response = await axios.post(`${API_URL}/booking/train/get`, { from, to });
        setArray(response.data)
      } catch (err) {
        alert('something went wrong , try again');
      }
  };


  const customColor = '#f08e2d';
  

  return (
    <div style={{ backgroundColor: '#F3E8D6', height: '100vh' }} className="d-flex flex-column align-items-center">
      {/* Heading Section */}
      <div className="d-flex align-items-center w-100" style={{ backgroundColor: customColor, height: '10vh' }}>
        <button className="btn" style={{ backgroundColor: customColor, color: 'white', border: 'none', height: '90%', width: '60px' }}>
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-white mx-auto mb-0">Train Details</h1>
      </div>

      {/* Header section */}
      <div className="d-flex justify-content-between w-80 my-4 gap-3 ">
        <button className="btn bg-white" style={{ color: 'black', border: '1px solid black' }}>All Dates</button>
        <button className="btn bg-white" style={{ color: 'black', border: '1px solid black' }}>Show Fares</button>
      </div>

      {/* Train Route Card */}
      <div className="w-90 p-3 mb-2 rounded" style={{ backgroundColor: customColor, color: 'white', gap: '20%' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-left">
            {/* <p className="h5 fw-bold m-0">KUM</p> */}
            <p className="m-0">{from}</p>
          </div>
          <GoArrowRight size={30} />
          <div className="text-right">
            {/* <p className="h5 fw-bold m-0">TJ</p> */}
            <p className="m-0">{to}</p>
          </div>
        </div>
      </div>

      {/* Train Information */}
      {array.map((train, index) => (
        <Link key={index} to='/TrainUpdate' style={{textDecoration:'none',color:'black'}}>
          <div  className="w-90 p-3 mb-1 rounded" style={{ backgroundColor: '#D3D3D3' }}>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-sm" style={{ backgroundColor: customColor, color: 'white' }}>{train.WAG}</button>
              <p className="fw-bold m-0">
                {train.departure} <GoArrowRight /> {train.arrival}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p className="m-0">{train.fromaddress}</p>
              <p className="m-0 text-primary fw-bold">Run Daily</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TrainDate;
