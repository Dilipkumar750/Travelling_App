import React, { useState } from "react";
import Header from "../header/Header";
import { LuPlaneTakeoff, LuPlaneLanding, LuCalendarDays } from "react-icons/lu";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import fifteen from '../../assets/fifteenoffer.svg';
import twintythreeoffer from '../../assets/twintythreeoffer.svg';

const TrainBookHome = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  const locations = ["Chennai", "Bengaluru", "Kochi", "Delhi"];

  // Filter out the 'fromLocation' from the second dropdown options
  const filteredLocations = locations.filter(
    (location) => location !== fromLocation
  );

  return (
    <div>
      <Header title='Trains Booking' arrow={true} />
      <section>
        <div style={{ margin: '0.5rem 2rem', padding: '1rem', backgroundColor: '#fef8d8', borderRadius: '1rem' }}>
          <form>
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
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div className="col-6">
                <label htmlFor="classSelect">Class</label>
                <select id="classSelect" className="form-control" style={{ backgroundColor: 'transparent' }}>
                  <option defaultValue>Choose...</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>
            <Link to='/TrainList'>
              <Button style={{ backgroundColor: '#f08e2d', width: '100%', marginTop: '1rem' }}>Search</Button>
            </Link>
          </form>
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
