import React, { useState } from "react";
import Header from "../header/Header";
import {LuCalendarDays } from "react-icons/lu";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link,useNavigate } from "react-router-dom";
import fifteen from '../../assets/fifteenoffer.svg';
import twintythreeoffer from '../../assets/twintythreeoffer.svg';
import { FaTrainSubway } from "react-icons/fa6";

const TrainBookHome = () => {
  const navigate = useNavigate()
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState("");
  const [trainClass, setTrainClass] = useState("");


  const locations = ["Chennai", "Bengaluru", "Kochi", "Delhi"];

  // Filter out the 'fromLocation' from the second dropdown options
  const filteredLocations = locations.filter(
    (location) => location !== fromLocation
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form values
    const formData = {
      fromLocation,
      toLocation,
      departureDate,
      returnDate,
      travellers,
      trainClass,
    };

    // Store form values in localStorage
    localStorage.setItem("trainSearchData", JSON.stringify(formData));
    navigate('/TrainList')
    // Optionally navigate to another page or perform another action
    // e.g., history.push("/FlightList");
  };

  return (
    <div>
      <Header title='Trains Booking' arrow={true} />
      <section>
        <div style={{ margin: '0.5rem 2rem', padding: '1rem', backgroundColor: '#fef8d8', borderRadius: '1rem' }}>
          <form onSubmit={handleSubmit}>
            {/* From Select */}
            <div className="col-auto">
              <label className="sr-only" htmlFor="fromSelect">
                From
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FaTrainSubway />
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
                    <FaTrainSubway />
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

            {/* Date and Traveller Inputs */}
            <div className="row">
              <div className="col-6">
                <label className="sr-only" htmlFor="departureDate">
                  Departure
                </label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <LuCalendarDays />
                    </div>
                  </div>
                  <input
                    type="date"
                    className="form-control"
                    id="departureDate"
                    onChange={(e) => setDepartureDate(e.target.value)}
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
              <div className="col-6">
                <label className="sr-only" htmlFor="returnDate">
                  Return
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="returnDate"
                  placeholder="Add return date"
                  onChange={(e) => setReturnDate(e.target.value)}
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div className="col-6">
                <label className="sr-only" htmlFor="travellersCount">
                  Traveller
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="travellersCount"
                  placeholder="Number of travellers"
                  onChange={(e) => setTravellers(e.target.value)}
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div className="col-6">
                <label htmlFor="classSelect">Class</label>
                <select id="classSelect" className="form-control" style={{ backgroundColor: 'transparent' }}
                onChange={(e) => setTrainClass(e.target.value)}>
                  <option defaultValue>Choose...</option>
                  <option>General Quota</option>
                  <option>Sleeper</option>
                </select>
              </div>
            </div>
              <Button type="submit" style={{ backgroundColor: '#f08e2d', width: '100%', marginTop: '1rem' }}>Search</Button>
          </form>
              <Link to='/TrackTrain'><Button style={{ backgroundColor: '#f08e2d', width: '100%', marginTop: '1rem' }}>Track Train</Button></Link>
        </div>

        <section style={{ padding: "0 1rem" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h6><b>Hot Offer</b></h6>
            <p style={{ color: "red" }}>See all</p>
          </div>
          <Swiper slidesPerView={1} spaceBetween={20} className="mySwiper">
            <SwiperSlide>
              <div className="card mb-3" style={{ width: '100%' }}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={fifteen} className="img-fluid rounded-start" alt="..." style={{ height: '100%' }} />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">15% discount with Mastercard</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-3" style={{ width: '100%' }}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={twintythreeoffer} className="img-fluid rounded-start" alt="..." style={{ height: '100%' }} />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">23% discount with Visa Credit Card</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet et adip</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link to='/TrainViewTicket'>
          <Button style={{ backgroundColor: '#f08e2d', width: '100%', color: 'black' }}>View Ticket</Button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default TrainBookHome;
