import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavbarThree from "./NavbarThree";
import Footer from "./Footer";
import Waldo from "../assets/waldo.jpg";
import PopupTwo from "./PopupTwo";
import FinishPop from "./FinishPop";
const apiUrl = import.meta.env.VITE_API_URL;
import UpdateScore from "./UpdateScore";

function GameThree() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positionPop, setPositionPop] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [showFinishPopup, setShowFinishPopup] = useState(false);

  // Related to game start and ending  // Starts here
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchgameData = async () => {
      try {
        const response = await fetch(apiUrl + "/game-start", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gameName: "Find Lost Characters",
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // console.log(data._id);
          setGameData(data);
        } else {
          console.error("Failed to retrieve scores");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchgameData();
  }, []);

  // Related to game start and ending // Ends here

  const selectedLetters = ["Professor", "Police", "Sign"];

  const [BoardItems, setBoardItems] = useState({
    Professor: {
      isDone: false,
      value: "Professor",
    },
    Police: {
      isDone: false,
      value: "Police",
    },
    Sign: {
      isDone: false,
      value: "Sign",
    },
  });

  const AlphabetPostion = {
    Professor: [600, 705, 1840, 1980],
    Police: [1900, 1940, 1050, 1150],
    Sign: [0, 50, 2800, 2880],
  };

  const cancelformSubmit = () => {
    setShowFinishPopup(false);
    navigate("/");
  };

  const togglePopup = (event) => {
    // setPosition({ x: event.nativeEvent.clientX, y: event.nativeEvent.clientY });
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    setPositionPop({ x: event.clientX, y: event.clientY - 94 });
    setIsOpen(!isOpen);

    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    // console.log(`Mouse clicked at coordinates: (${x}, ${y})`);
  };

  const comparePosition = (letter) => {
    let X1, Y1, X2, Y2;
    // if (window.innerWidth >= 2100) {
    //   X1 = AlphabetPostion[letter][0];
    //   X2 = AlphabetPostion[letter][1];
    //   Y1 = AlphabetPostion[letter][2];
    //   Y2 = AlphabetPostion[letter][3];
    // } else {
    X1 = AlphabetPostion[letter][0] * (window.innerWidth / 2000);
    X2 = AlphabetPostion[letter][1] * (window.innerWidth / 2000);
    Y1 = AlphabetPostion[letter][2] * (window.innerWidth / 2000);
    Y2 = AlphabetPostion[letter][3] * (window.innerWidth / 2000);
    // }
    // console.log(AlphabetPostion[letter][0]);
    if (position.x >= X1 && position.x <= X2 && position.y >= Y1 && position.y <= Y2) {
      setBoardItems({ ...BoardItems, [letter]: { value: letter, isDone: true } });

      setIsVisible(true);
      setConfirmationText("You Found It!");
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      // console.log(position.x, X1, X2, position.y, Y1, Y2);
      // if (1 == 1) {
      //   setIsRunning(false);
      //   setShowFinishPopup(true);
      //   console.log(BoardItems);
      // }
    } else {
      setIsVisible(true);
      setConfirmationText("Oops! Please Try Again...");
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      // console.log(position.x, X1, X2, position.y, Y1, Y2);
    }
  };

  // Check if all finding is done

  useEffect(() => {
    if (BoardItems.Professor.isDone === true && BoardItems.Police.isDone === true && BoardItems.Sign.isDone === true) {
      UpdateScore(gameData._id);
      setIsRunning(false);
      setShowFinishPopup(true);

      // console.log(BoardItems);
    }
  }, [BoardItems]);

  // End of all finding done

  // Timer Area

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [isRunning]); // The empty dependency array ensures that the effect runs only once (on mount)

  // Timer Area Ends

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavbarThree timer={`${String(Math.trunc(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`} BoardItems={BoardItems} />
      <div className="bg-blue-300 relative mt-[84px]  py-[10px]   min-h-[100vh]">
        <PopupTwo comparePosition={comparePosition} isOpen={isOpen} closePopup={closePopup} positionPop={positionPop} />
        {/* <img onClick={togglePopup} src={Abcd} alt="Abcd" className="w-full   object-cover rounded-md mb-4" /> */}

        <img
          className="w-full"
          src={Waldo}
          alt="Find Characters"
          onClick={(e) => {
            togglePopup(e);
          }}
        />
      </div>
      <Footer />
      {showFinishPopup && <FinishPop time={seconds} gameId={gameData._id} timeSpent={`${String(Math.trunc(seconds / 60)).padStart(2, "0")} minutes ${String(seconds % 60).padStart(2, "0")} seconds`} cancelformSubmit={cancelformSubmit} />}

      {isVisible ? <div className="fixed top-[120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border rounded shadow-md">{confirmationText}</div> : null}
    </>
  );
}

export default GameThree;
