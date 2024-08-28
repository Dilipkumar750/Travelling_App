import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoArrowRight } from "react-icons/go";
import Header from "../../Components/header/Header";
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon

const TrainDate = () => {
  const trainData = [
    { number: '16751', startTime: '12:30 am', endTime: '01:00 am', name: 'Pamban Express', frequency: 'Run Daily' },
    { number: '22623', startTime: '03:15 am', endTime: '04:00 am', name: 'Uzhavan Express', frequency: 'Run Daily' },
    { number: '16811', startTime: '07:15 am', endTime: '08:00 am', name: 'Salem Express', frequency: 'Run Daily' },
    { number: '17315', startTime: '01:15 pm', endTime: '02:00 pm', name: 'Mysuru Express', frequency: 'S M T W T F S' }
  ];

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
            <p className="h5 fw-bold m-0">KUM</p>
            <p className="m-0">(Kumbakonam)</p>
          </div>
          <GoArrowRight size={30} />
          <div className="text-right">
            <p className="h5 fw-bold m-0">TJ</p>
            <p className="m-0">(Thanjavur)</p>
          </div>
        </div>
      </div>

      {/* Train Information */}
      {trainData.map((train, index) => (
        <div key={index} className="w-90 p-3 mb-1 rounded" style={{ backgroundColor: '#D3D3D3' }}>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-sm" style={{ backgroundColor: customColor, color: 'white' }}>{train.number}</button>
            <p className="fw-bold m-0">
              {train.startTime} <GoArrowRight /> {train.endTime}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <p className="m-0">{train.name}</p>
            <p className="m-0 text-primary fw-bold">{train.frequency}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainDate;
