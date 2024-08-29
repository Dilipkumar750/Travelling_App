import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaTrain, FaArrowLeft } from 'react-icons/fa';
import { LuArrowDownUp } from 'react-icons/lu';
import { LuPlaneTakeoff, LuPlaneLanding, LuCalendarDays } from "react-icons/lu";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TrackTrain = () => {
  const navigate = useNavigate()

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");


  const customColor = '#f08e2d'; // Orange color
  const whiteBorder = '#ffffff'; // White border color

  // State for cities
  const [cities] = useState([
    { name: 'KUMBAKONAM', code: 'KMU' },
    { name: 'THANJAVUR', code: 'TJ' }
  ]);

  const locations = ["Chennai", "Bengaluru", "Kochi", "Delhi"];
  const filteredLocations = locations.filter(
    (location) => location !== fromLocation
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form values
    const formData = {
      fromLocation,
      toLocation,
    };

    // Store form values in localStorage
    localStorage.setItem("trainSearchData", JSON.stringify(formData));
    navigate('/TrainDate')
  };


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
      <div className="p-4 mb-5 rounded" style={{ width: '90%', backgroundColor: customColor, color: 'white', border: `2px solid ${whiteBorder}`, borderRadius: '40px', marginTop: '15%' }}>
        <div className="d-flex flex-column align-items-center justify-content-center ">
         <form onSubmit={handleSubmit} >
            {/* From Select */}
            <div className="col-auto">
              <label className="sr-only" htmlFor="fromSelect">
                From
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <LuPlaneTakeoff />
                  </div>
                </div>
                <select
                  className="form-control"
                  id="fromSelect"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <option value="" disabled>
                    Select Departure
                  </option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* To Select */}
            <div className="col-auto">
              <label className="sr-only" htmlFor="toSelect">
                To
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <LuPlaneLanding />
                  </div>
                </div>
                <select
                  className="form-control"
                  id="toSelect"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  disabled={!fromLocation}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <option value="" disabled>
                    Select Destination
                  </option>
                  {filteredLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
              <Button type="submit" style={{ backgroundColor: '#f08e2d', width: '100%', marginTop: '1rem' }}>Search</Button>
          </form>
        </div>
      </div>

      {/* Search Button */}
      {/* <button className="btn" style={{ backgroundColor: customColor, color: 'white', width: '70%', marginBottom: '1rem', borderRadius: '50px' }}>
        Search TRAIN
      </button> */}
      
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
