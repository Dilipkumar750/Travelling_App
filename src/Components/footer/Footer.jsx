import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { HiDocumentCheck } from "react-icons/hi2";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineLink } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Footer() {
    // State to track the active icon
    const [activeIcon, setActiveIcon] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));

    // Function to handle icon click
    const handleClick = (icon) => {
        setActiveIcon(icon);
    };

    // Style for active and inactive icons
    const iconStyle = (icon) => ({
        cursor: 'pointer',
        backgroundColor: activeIcon === icon ? '#ffb3b3' : 'transparent',
        borderRadius: '20%',
        padding: '10px',
        transition: 'background-color 0.3s ease',
        textDecoration:'none',
        color:'black'
    });

    return (
        <div style={{ backgroundColor: '#ffe3e0', display: 'flex', justifyContent: "space-between", alignItems: 'center', height: '50px', fontSize: '3rem',padding:"2rem",width:'100%', }}>
            <Link to={user.role =='admin'? '/UserHomePage' :'/HomePage'}>
                <AiFillHome
                    style={iconStyle('home')}
                    onClick={() => handleClick('home')}
                />
            </Link>
        {
            user.role=='admin'?
            <>
                <Link to='/addExplore'>
                    <HiOutlineLink
                        style={iconStyle('link')}
                        onClick={() => handleClick('link')}
                    />
                </Link>
                <Link to='/PendingRequests'>
                    <HiChatBubbleLeftRight
                        style={iconStyle('chat')}
                        onClick={() => handleClick('chat')}
                    />
                </Link>
            </>
            :
           <>
                <Link to='/Travels'>
                    <HiLocationMarker
                        style={iconStyle('location')}
                        onClick={() => handleClick('location')}
                    />
                </Link>
                <Link to='/BookTickets'>
                    <HiDocumentCheck
                        style={iconStyle('document')}
                        onClick={() => handleClick('document')}
                    />
                </Link>
           </>

        }
            <Link to='/Profile'>
                <BiSolidUserCircle
                    style={iconStyle('user')}
                    onClick={() => handleClick('user')}
                />
            </Link>
        </div>
    );
}

export default Footer;
