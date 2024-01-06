// ZoomableImage.jsx
import React, { useState } from "react";

const ZoomableImage = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="relative">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Sample Image"
          className="w-full h-auto transform scale-0 transition-transform duration-300 ease-in-out"
          style={{
            transform: `scale(${zoomLevel})`,
            maxWidth: "100%",
          }}
        />

        <div className="absolute top-0 left-0 p-4">
          <button onClick={handleZoomOut} className="bg-blue-500 text-white px-2 py-1 mr-2">
            Zoom Out
          </button>
          <button onClick={handleZoomReset} className="bg-blue-500 text-white px-2 py-1">
            Reset Zoom
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoomableImage;
