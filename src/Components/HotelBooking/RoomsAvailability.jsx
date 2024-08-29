import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineKingBed } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { FaKitchenSet } from "react-icons/fa6";
import { MdChildFriendly } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomsAvailability = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F3E8D6', }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <FaArrowLeft 
          style={{ color: '#ff5f00', fontSize: '20px', marginRight: '15px' }} 
        />
        <h3 style={{ color: 'black' }}>Rooms Available</h3>
      </div>

      <section style={{ padding: "1rem" }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Room No: 123 B</h4>
        </div>
        <hr />
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h5 style={{ fontWeight: 'bold' }}>Hotel Description</h5>
        </div>
        <p style={{ fontSize: '14px', textAlign: 'center' }}>
          Set in landscaped gardens overlooking the Ébrié lagoon, this upscale hotel featuring contemporary local art and architectural touches is 3 km from Mosquée de la riviéra and 17 km from Banco National Park.
        </p>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <h5 style={{ fontWeight: 'bold' }}>Hotel Facilities</h5>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px', border: '1px solid black', padding: '2px', backgroundColor: 'lightgray' }}>
            <p><FaWifi /><br/>
            Free Wi-Fi</p>
            <p><IoIosFitness /><br/>
            Fitness Center</p>
            <p><FaKitchenSet /><br/>
            Free Breakfast</p>
            <p><MdChildFriendly /><br/>
            Kid Friendly</p>
          </div>
          <div style={{  justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaLocationDot 
              style={{ marginRight: '10px' }} />
              <p>Chennai</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaPhoneAlt  style={{ marginRight: '5px' }} />
              <p>+225 22 48 26 26</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <p><FaCalendarAlt />
            Checkin 12 PM</p>
            <p><FaCalendarAlt />
            Checkout 11 AM</p>
          </div>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p><FaKitchenSet
            style={{ marginRight: '5px' }} /><br/>Graet dining</p>
            <p><MdOutlinePets
            style={{ marginRight: '5px' }} /> <br/>Pet friendly</p>
            
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p><RiHotelLine style={{ marginRight: '5px' }} /><br/> Great rooms</p>
          <p><MdFreeBreakfast          style={{ marginRight: '5px' }} /><br/>Graet breakfast</p>
            
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p><FaPersonSwimming style={{ marginRight: '5px' }} /><br/> pool</p>
          <p><SiWebmoney style={{ marginRight: '5px' }} /><br/> vibe</p>
          </div>
        </div>
        <hr />

        <div style={{ marginBottom: '20px' }}>
          <h5>Check Availability</h5>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <p><FaCalendarAlt />Checkin date & time</p>
            <BsChevronDown />
          </div>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <p><FaCalendarAlt />Checkout date & time</p>
            <BsChevronDown />
          </div>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <p><FaUserGroup />
            2 Adults</p>
            <p>0 Children</p>
            <p>1 Room</p>
          </div>
          <Link to="/Hotelpayment">
          <Button style={{ backgroundColor: '#f08e2d', color: 'black', width: '100%', marginTop: '10px' }}>
            Continue
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoomsAvailability;
