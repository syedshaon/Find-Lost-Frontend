import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Abcd from "../assets/ABCD.jpg";
import Popup from "./Popup";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ImageWithClickCoordinates from "./ImageWithClickCoordinates";

function GameOne() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positionPop, setPositionPop] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = (event) => {
  //   setPosition({ x: event.clientX, y: event.clientY });
  //   setIsOpen(!isOpen);
  // };

  const togglePopup = (event) => {
    setPosition({ x: event.nativeEvent.clientX, y: event.nativeEvent.clientY });
    setPositionPop({ x: event.clientX, y: event.clientY });
    setIsOpen(!isOpen);

    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    console.log(`Mouse clicked at coordinates: (${x}, ${y})`);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <br />

      <div className="bg-blue-300 relative   py-10  px-1   min-h-[100vh]">
        <Popup isOpen={isOpen} closePopup={closePopup} positionPop={positionPop} />
        {/* <img onClick={togglePopup} src={Abcd} alt="Abcd" className="w-full   object-cover rounded-md mb-4" /> */}
        <ImageWithClickCoordinates togglePopup={togglePopup} imgSrc={Abcd} />
      </div>
      <Footer />
    </>
  );
}

export default GameOne;
