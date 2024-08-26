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
        transition: 'background-color 0.3s ease'
    });

    return (
        <div style={{ backgroundColor: '#ffe3e0', display: 'flex', justifyContent: "space-between", alignItems: 'center', height: '50px', fontSize: '3rem',padding:"2rem",position:'absolute',bottom:0,width:'100%' }}>
            <Link to='/HomePage'>
                <AiFillHome
                    style={iconStyle('home')}
                    onClick={() => handleClick('home')}
                />
            </Link>
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
            <Link to=''>
                <BiSolidUserCircle
                    style={iconStyle('user')}
                    onClick={() => handleClick('user')}
                />
            </Link>
            {/* Uncomment and add styles for these icons as needed */}
            {/* <HiOutlineLink
                style={iconStyle('link')}
                onClick={() => handleClick('link')}
            />
            <HiChatBubbleLeftRight
                style={iconStyle('chat')}
                onClick={() => handleClick('chat')}
            /> */}
        </div>
    );
}

export default Footer;
