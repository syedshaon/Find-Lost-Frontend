import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once (on mount)

  return (
    <div>
      <h1>
        Timer: {Math.trunc(seconds / 60)}:{seconds % 60}
      </h1>
    </div>
  );
};

export default Stopwatch;
