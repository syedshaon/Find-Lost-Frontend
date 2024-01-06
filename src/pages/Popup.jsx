// Popup.jsx
import React, { useState } from "react";

const Popup = ({ positionPop, isOpen, closePopup }) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  console.log(positionPop.y / screenHeight);

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
                    top: `${positionPop.y * 0.7}px`,

                    left: `${positionPop.x * 0.6}px`,
                  }
                : {
                    top: `${positionPop.y}px`,

                    left: `${positionPop.x * 0.6}px`, // Adjust the offset as needed
                  }
              : positionPop.y / screenHeight > 0.7
              ? {
                  top: `${positionPop.y * 0.7}px`,
                  left: `${positionPop.x + 10}px`, // Adjust the offset as needed
                }
              : {
                  top: `${positionPop.y}px`,
                  left: `${positionPop.x + 10}px`, // Adjust the offset as needed
                }
          }
        >
          <div className="bg-white p-8 max-w-md rounded-md shadow-md">
            <div className="flex justify-end">
              <button onClick={closePopup} className="text-gray-700 hover:text-red-500">
                &#10006;
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Popup Content</h2>
            <p>This is a simple pop-up window created using Tailwind CSS and React.</p>
            {/* Add your popup content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
