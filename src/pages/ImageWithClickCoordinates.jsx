// ImageWithClickCoordinates.jsx
import React, { useState, useEffect } from "react";

const ImageWithClickCoordinates = ({ togglePopup, imgSrc }) => {
  const handleImageClick = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    console.log(`Mouse clicked at coordinates: (${x}, ${y})`);
  };

  //   const [zoomLevel, setZoomLevel] = useState(1);

  //   const handleZoomOut = () => {
  //     setZoomLevel(zoomLevel - 0.1);
  //   };

  //   const handleZoomReset = () => {
  //     setZoomLevel(1);
  //   };

  const [scaleFactor, setScaleFactor] = useState(1);
  const [leftOffset, setleftOffset] = useState(0);

  useEffect(() => {
    const updateScaleFactor = () => {
      // Set the scaling factor based on the screen width
      const screenWidth = window.innerWidth;
      const maxScreenWidth = 2120; // Adjust the maximum width as needed
      const minScaleFactor = 0.1; // Minimum scale factor
      const maxScaleFactor = 1; // Maximum scale factor

      // Calculate the scale factor based on the screen width
      //   const newScaleFactor = minScaleFactor + (maxScaleFactor - minScaleFactor) * (screenWidth / maxScreenWidth);
      const newScaleFactor = screenWidth / maxScreenWidth;
      setleftOffset((maxScreenWidth - screenWidth) / 2);

      setScaleFactor(newScaleFactor);
      //   console.log(newScaleFactor);
    };

    // Initial update
    updateScaleFactor();

    // Update on window resize
    window.addEventListener("resize", updateScaleFactor);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScaleFactor);
    };
  }, []);

  return (
    <div className="relative min-h-[100vh]">
      <div
        style={{
          position: `absolute`,
          margin: `0 auto`,

          transform: `scale(${scaleFactor})`,
          transformOrigin: `0% 0%`,
        }}
      >
        <img
          onClick={togglePopup}
          src={imgSrc}
          alt="Sample Image"
          style={{
            minWidth: `2100px`,
            maxWidth: `2100px`,
          }}
        />

        {/* <div className="absolute top-0 left-0 p-4">
          <button onClick={handleZoomOut} className="bg-blue-500 text-white px-2 py-1 mr-2">
            Zoom Out
          </button>
          <button onClick={handleZoomReset} className="bg-blue-500 text-white px-2 py-1">
            Reset Zoom
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ImageWithClickCoordinates;
