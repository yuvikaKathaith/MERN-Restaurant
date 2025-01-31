import React from 'react';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white border-b-[1px] border-gray-700">
        {/* logo */}
        <div className="h-28 w-32 -mt-4 ml-16 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
                <img src='/images/logo.png' alt="Logo" />   
            </Link>
        </div>

        {/* Middle buttons */}
        <div>
            <ul className="flex justify-between items-center text-[23px]">
                <Link to="hero-section" smooth={true} duration={500}>
                  <button className="m-6">HOME</button>
                </Link>
                <Link to="about" smooth={true} duration={500}>
                  <button className="m-6">ABOUT US</button>
                </Link>
                <Link to="qualities" smooth={true} duration={500}>
                  <button className="m-6">SERVICES</button>
                </Link>
                <Link to="team" smooth={true} duration={500}>
                  <button className="m-6">TEAM</button>
                </Link>
                <Link to="reservation" smooth={true} duration={500}>
                  <button className="m-6">RESERVATION</button>
                </Link>
            </ul>
        </div>

        {/* Our menu button */}
        <div>
            <button className="border border-white rounded-3xl bg-transparent h-10 w-28 m-12 mr-20">OUR MENU</button>
        </div>
    </div>
  );
};

export default Navbar;
