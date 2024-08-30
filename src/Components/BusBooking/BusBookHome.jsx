import React, { useState } from "react";
import Header from "../header/Header";
import { LuCalendarDays } from "react-icons/lu";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import fifteen from '../../assets/fifteenoffer.svg'
import twintythreeoffer from '../../assets/twintythreeoffer.svg';
import { Link ,useNavigate} from 'react-router-dom';
import { FaBus } from "react-icons/fa";


const BusBookHome = () => {
  const navigate = useNavigate()
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState("");
  const [flightClass, setFlightClass] = useState("");

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
      flightClass,
    };

    // Store form values in localStorage
    localStorage.setItem("BusSearchData", JSON.stringify(formData));
    navigate('/BusList')
    // Optionally navigate to another page or perform another action
    // e.g., history.push("/FlightList");
  };


  return (
    <div>
      <Header title='Book Tickets' arrow={true} />
      <section>
        <div style={{ margin: '0.5rem 2rem', padding: '1rem', backgroundColor: '#fef8d8', borderRadius: '1rem' }}>
          <form onSubmit={handleSubmit}>
            {/* From Select */}
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                From
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <FaBus />
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
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                To
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <FaBus />
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

            {/*  */}
            <div className="row">
              <div className="col-6">
                <label class="sr-only" for="inlineFormInputGroup">
                  Departure
                </label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <LuCalendarDays />
                    </div>
                  </div>
                  <input
                    type="date"
                    class="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Username"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
              <div className="col-6">
                <label class="sr-only" for="inlineFormInputGroup">
                  Return
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Add return date"
                  style={{ backgroundColor: 'transparent' }}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label class="sr-only" for="inlineFormInputGroup">
                  Traveller
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="no of travellers"
                  style={{ backgroundColor: 'transparent' }}
                  value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label for="inputState">Class</label>
                <select id="inputState" class="form-control" style={{ backgroundColor: 'transparent' }}
                value={flightClass}
                onChange={(e) => setFlightClass(e.target.value)}>
                  <option selected>Choose...</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>
            <Button type="submit" style={{ backgroundColor: '#f08e2d', width: '100%', marginTop: '1rem' }}>Search</Button>
          </form>
        </div>
       <section style={{ padding: "0 1rem" }}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <h6><b>Hot Offer</b></h6>
          <p style={{ color: "red" }} >See all</p>
        </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card mb-3" style={{width:'100%'}}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={fifteen} className="img-fluid rounded-start" alt="..." style={{height:'100%'}}/>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">15% discount with mastercard</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-3" style={{width:'100%'}}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={twintythreeoffer} className="img-fluid rounded-start" alt="..." style={{height:'100%'}}/>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">23% discount in visa credit card</h5>
                      <p className="card-text">Lorem ipsum dolor sit am etet adip</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link to='/BusViewTicket'>
        <Button style={{ backgroundColor: '#f08e2d', width: '100%',color:'black'}}>View Ticket</Button>
        </Link>
       </section>
      </section>
    </div>
  );
};

export default BusBookHome;
