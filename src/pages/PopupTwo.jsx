// Popup.jsx
import React, { useState } from "react";
import Professor from "../assets/prefessor.jpg";
import Police from "../assets/police.jpg";
import Sign from "../assets/sign.jpg";

const PopupTwo = ({ positionPop, isOpen, closePopup, comparePosition }) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // console.log(positionPop.y / screenHeight);

  return (
    <div>
      {/* Popup */}
      {isOpen && (
        <div
          className="fixed z-50"
          style={
            positionPop.x / screenWidth > 0.6
              ? positionPop.y / screenHeight > 0.7
                ? {
                    top: `${positionPop.y * 0.6}px`,

                    left: `${positionPop.x * 0.7}px`,
                  }
                : {
                    top: `${positionPop.y * 0.6}px`,

                    left: `${positionPop.x * 0.7}px`, // Adjust the offset as needed
                  }
              : positionPop.y / screenHeight > 0.7
              ? {
                  top: `${positionPop.y * 0.6}px`,

                  left: `${positionPop.x + 10}px`, // Adjust the offset as needed
                }
              : {
                  top: `${positionPop.y * 0.6}px`,

                  left: `${positionPop.x + 10}px`, // Adjust the offset as needed
                }
          }
        >
          <div className="bg-white   max-w-md rounded-md shadow-md">
            <div className="flex justify-end pr-3 pt-3">
              <button onClick={closePopup} className="text-gray-700 hover:text-red-500">
                &#10006;
              </button>
            </div>
            <div className="flex flex-col items-stretch justify-stretch">
              <div
                onClick={() => {
                  comparePosition(`Professor`);
                  closePopup();
                }}
                className="cursor-pointer  min-w-[70px]  text-5xl   border border-gray-400 hover:border-red-600 hover:bg-yellow-400 text-center   p-2 pt-0   "
              >
                <img src={Professor} alt="Professor" />
              </div>
              <div
                onClick={() => {
                  comparePosition(`Police`);
                  closePopup();
                }}
                className="cursor-pointer  min-w-[70px]  text-5xl   border border-gray-400 hover:border-red-600 hover:bg-yellow-400 text-center   p-2 pt-0   "
              >
                <img src={Police} alt="Police" />
              </div>
              <div
                onClick={() => {
                  comparePosition(`Sign`);
                  closePopup();
                }}
                className="cursor-pointer  min-w-[70px]  text-5xl   border border-gray-400 hover:border-red-600 hover:bg-yellow-400 text-center   p-2 pt-0   "
              >
                <img src={Sign} alt="Sign" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupTwo;
