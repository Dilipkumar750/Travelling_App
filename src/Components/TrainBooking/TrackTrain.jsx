import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaTrain, FaArrowLeft } from 'react-icons/fa';
import { LuArrowDownUp } from 'react-icons/lu';

const TrackTrain = () => {
  const customColor = '#f08e2d'; // Orange color
  const whiteBorder = '#ffffff'; // White border color

  // State for cities
  const [cities] = useState([
    { name: 'KUMBAKONAM', code: 'KMU' },
    { name: 'THANJAVUR', code: 'TJ' }
  ]);

  return (
    <div className="d-flex flex-column align-items-center" style={{ backgroundColor: '#F3E8D6', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <div className="d-flex align-items-center w-100" style={{ backgroundColor: customColor, height: '10vh' }}>
        <button className="btn" style={{ backgroundColor: customColor, color: 'white', border: 'none', height: '90%', width: '60px' }}>
          <FaArrowLeft size={24} />
        </button>
        <h1 style={{ marginLeft: '-1%' }} className="text-white">Train Details</h1>
      </div>
      
      {/* Card for City Selection */}
      <div className="p-4 mb-5 rounded" style={{ width: '90%', backgroundColor: customColor, color: 'white', height: '200px', border: `2px solid ${whiteBorder}`, borderRadius: '40px', marginTop: '15%' }}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          {cities.map((city, index) => (
            <React.Fragment key={index}>
              {/* City Box */}
              <h6 className="mt-2">{index === 0 ? 'From' : 'To'}</h6>
              <div className="text-center mb-3" style={{ border: `2px solid ${whiteBorder}`, borderRadius: '10px', width: '80%' }}>
                <p className="m-0">{city.name}</p>
                <p className="h6 m-0">{city.code}</p>
              </div>
              
              {/* Arrows */}
              {index === 0 && <LuArrowDownUp />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <button className="btn" style={{ backgroundColor: customColor, color: 'white', width: '70%', marginBottom: '1rem', borderRadius: '50px' }}>
        Search TRAIN
      </button>
      
      {/* Blue Line */}
      <hr style={{ color: '#007bff', backgroundColor: '#007bff', height: '2px', width: '80%', border: 'none' }} />

      {/* Input Fields */}
      <div className="w-80 mb-3">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Train No. / Train Name" />
          <span className="input-group-text">
            <FaTrain style={{ marginRight: '10px' }} />
            <FaSearch />
          </span>
        </div>
        <p className='text-center'>Live stations</p>
        <div className="input-group">
          <input type="text" className="form-control" placeholder={cities[0].name} />
          <span className="input-group-text">
            <FaTrain style={{ marginRight: '10px' }} />
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackTrain;
