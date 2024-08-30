import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineUser } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

function Header({ title, arrow }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goBack = () => {
    navigate(-1);
  };
  const logout = () => {
    localStorage.removeItem('trainSearchData');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('hotelData');
    localStorage.removeItem('flightSearchData');
    localStorage.removeItem('BusSearchData');

  };

  

  return (
    <header style={{ backgroundColor: '#F08E2D', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0 0 70px 70px' }}>
      <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between' }}>
        {arrow ? (
          <AiOutlineArrowLeft style={{ color: 'white', fontSize: '1.5rem', fontWeight: '500', marginTop: '8px' }} onClick={goBack} />
        ) : (
          <IoMenu style={{ color: 'white', fontSize: '1.5rem', fontWeight: '500', marginTop: '8px' }} onClick={handleShow} />
        )}
        <p style={{ flexBasis: '80%', color: 'white', fontSize: '1.5rem', fontWeight: '500' }}>{title}</p>
        <Link to='/Profile'><AiOutlineUser style={{ color: 'white', fontSize: '1.5rem', fontWeight: '500', marginTop: '8px' }} /></Link>
      </div>

      {/* Offcanvas Sidebar */}
      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ backgroundColor: '#f08e2d', width: '70%' }}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <h1 style={{ fontFamily: 'cursive', color: 'white' }}>Journey Joy</h1>
            <p style={{ fontFamily: 'cursive', color: 'white' }}>Your Travel Companion, Anytime, Anywhere.</p>
            {[
              { name: 'Notifications', path: '/Notifications' },
              { name: 'My Profile', path: '/Profile' },
              { name: 'Settings', path: '/Settings' },
              { name: 'Logout', path: '/login' }
            ].map((item, index) => (
              <li key={index} style={{ color: 'white', marginBottom: '1rem' }}>
                <Link to={item.path} onClick={item.name==='Logout' &&logout} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {item.name}
                </Link>
                <hr style={{ borderColor: 'white' }} />
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
