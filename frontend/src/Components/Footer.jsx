import React from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-[30px] font-semibold mb-2 md:mb-0">FOODY</div>
        <div className="text-center md:text-right mb-2 md:mb-0">
          <p className="text-[20px]">Connaught Place, New Delhi</p>
          <p className="text-[20px]">Open: 05:00 PM - 12:00 AM</p>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-2">
        <div className="text-[20px] text-left mb-2 md:mb-0">Developed By Yuvika</div>
        <div className="text-[20px] text-right">All Rights Reserved By Foody</div>
      </div>
    </footer>
  );
};

export default Footer;
