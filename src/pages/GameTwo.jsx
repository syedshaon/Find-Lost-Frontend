import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavbarNew from "./NavbarNew";
import Footer from "./Footer";
import Animals from "../assets/animals.jpg";
import Popup from "./Popup";
import FinishPop from "./FinishPop";
const apiUrl = import.meta.env.VITE_API_URL;
import UpdateScore from "./UpdateScore";

function GameTwo() {
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
            gameName: "Find Lost Animals",
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

  const uLetters = ["Cheetah", "Chicken", "Deer", "Zebra", "Horse", "Sloth", "Elephant", "Crocodile", "Hyena", "Rhino", "Ox", "Giraffe", "Ant", "Butterfly", "Snake", "Ostrich", "Fox", "Tortoise", "Snail", "Dog", "Sheep", "Panda", "Squirrel", "Cow", "Cat", "Camel", "Penguin", "Gorilla"];

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [BoardItems, setBoardItems] = useState({});

  useEffect(() => {
    let shuffledArray = uLetters.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    setSelectedLetters(shuffledArray.slice(0, 3));
  }, []);

  useEffect(() => {
    const newItems = selectedLetters.reduce((acc, letter) => {
      acc[letter] = {
        isDone: false,
        value: letter,
      };
      return acc;
    }, {});

    // console.log(newItems);
    setBoardItems({ ...newItems });
  }, [selectedLetters]);

  const AlphabetPostion = {
    Cheetah: [0, 525, 0, 357],
    Chicken: [526, 1050, 0, 357],
    Deer: [1051, 1576, 0, 357],
    Zebra: [1577, 2102, 0, 357],

    Horse: [0, 525, 358, 715],
    Sloth: [526, 1050, 358, 715],
    Elephant: [1051, 1576, 358, 715],
    Crocodile: [1577, 2102, 358, 715],

    Hyena: [0, 525, 716, 1073],
    Rhino: [526, 1050, 716, 1073],
    Ox: [1051, 1576, 716, 1073],
    Giraffe: [1577, 2102, 716, 1073],

    Ant: [0, 525, 1074, 1431],
    Butterfly: [526, 1050, 1074, 1431],
    Snake: [1051, 1576, 1074, 1431],
    Ostrich: [1577, 2102, 1074, 1431],

    Fox: [0, 525, 1432, 1789],
    Tortoise: [526, 1050, 1432, 1789],
    Snail: [1051, 1576, 1432, 1789],
    Dog: [1577, 2102, 1432, 1789],

    Sheep: [0, 525, 1790, 2147],
    Panda: [526, 1050, 1790, 2147],
    Squirrel: [1051, 1576, 1790, 2147],
    Cow: [1577, 2102, 1790, 2147],

    Cat: [0, 525, 2148, 2500],
    Camel: [526, 1050, 2148, 2500],
    Penguin: [1051, 1576, 2148, 2500],
    Gorilla: [1577, 2102, 2148, 2500],
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
  };

  const comparePosition = (letter) => {
    let X1, Y1, X2, Y2;
    X1 = AlphabetPostion[letter][0] * (window.innerWidth / 2100);
    X2 = AlphabetPostion[letter][1] * (window.innerWidth / 2100);
    Y1 = AlphabetPostion[letter][2] * (window.innerWidth / 2100);
    Y2 = AlphabetPostion[letter][3] * (window.innerWidth / 2100);
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
    if (Object.keys(BoardItems).length > 2) {
      if (Object.values(BoardItems).every((item) => item.isDone === true)) {
        UpdateScore(gameData._id);
        setIsRunning(false);
        setShowFinishPopup(true);
        // console.log(BoardItems);
      }
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
      <NavbarNew timer={`${String(Math.trunc(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`} BoardItems={BoardItems} />
      <div className="bg-blue-300 relative mt-[84px]  py-[10px]   min-h-[100vh]">
        <Popup comparePosition={comparePosition} isOpen={isOpen} closePopup={closePopup} positionPop={positionPop} selectedLetters={selectedLetters} />
        {/* <img onClick={togglePopup} src={Abcd} alt="Abcd" className="w-full   object-cover rounded-md mb-4" /> */}

        <img
          className="w-full"
          src={Animals}
          alt="Number Game"
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

export default GameTwo;
