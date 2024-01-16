import React, { useState, useEffect } from "react";

import NavbarNew from "./NavbarNew";
import Footer from "./Footer";
import Animals from "../assets/animals.jpg";
import Popup from "./Popup";

function GameTwo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positionPop, setPositionPop] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // const togglePopup = (event) => {
  //   setPosition({ x: event.clientX, y: event.clientY });
  //   setIsOpen(!isOpen);
  // };

  // let imgWidth;
  // let imgHeight;
  // let Q = [0, 525, 0, 357];
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

    console.log(newItems);
    setBoardItems({ ...newItems });
  }, [selectedLetters]);

  console.log(BoardItems);
  console.log(selectedLetters);

  useEffect(() => {
    const newItems = selectedLetters.reduce((acc, letter) => {
      acc[letter] = {
        isActive: false,
        value: letter,
      };
      return acc;
    }, {});
    setBoardItems(newItems);
    console.log(newItems);
  }, []);

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
  // const [Qposition, setQPosition] = useState(0);
  // const [Wposition, setWPosition] = useState(0);
  // const [Cposition, setCPosition] = useState(0);

  const togglePopup = (event) => {
    // setPosition({ x: event.nativeEvent.clientX, y: event.nativeEvent.clientY });
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    setPositionPop({ x: event.clientX, y: event.clientY - 94 });
    setIsOpen(!isOpen);

    // const x = event.clientX;
    // const y = event.clientY;

    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    // const x = event.nativeEvent.clientX;
    // const y = event.nativeEvent.clientY;

    console.log(`Mouse clicked at coordinates: (${x}, ${y})`);
  };

  // useEffect(() => {
  //   const newQPostion = [0, 525, 0, 357];
  //   const newWPostion = [526, 1050, 0, 357];
  //   const newCPostion = [1051, 1576, 0, 357];
  //   setQPosition(newQPostion);
  //   setWPosition(newWPostion);
  //   setCPosition(newCPostion);
  // }, []);

  // const [windowSize, setWindowSize] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWindowSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   // Add event listener on component mount
  //   window.addEventListener("resize", handleResize);

  //   // Remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); // Empty dependency array ensures that this effect runs only once on mount

  // const updateImgPosition = () => {
  //   if (window.innerWidth > 2100) {
  //     // imgWidth = 2100;
  //     // imgHeight = 2500;
  //     // Default value, so not required
  //   } else {
  //     // imgWidth = window.innerWidth;
  //     // imgHeight = (window.innerWidth / 2100) * 2500;
  //     const newQPostion = [0 * (window.innerWidth / 2100), 525 * (window.innerWidth / 2100), 0 * (window.innerWidth / 2100), 357 * (window.innerWidth / 2100)];
  //     setQPosition(newQPostion);
  //   }
  //   console.log("It ran.");
  //   console.log(Qposition);
  // };

  // // Run your function whenever screen size changes
  // useEffect(() => {
  //   updateImgPosition();
  //   // You can also include windowSize as a dependency if needed
  // }, [windowSize]);

  const comparePosition = (letter) => {
    let X1, Y1, X2, Y2;
    // if (window.innerWidth >= 2100) {
    //   X1 = AlphabetPostion[letter][0];
    //   X2 = AlphabetPostion[letter][1];
    //   Y1 = AlphabetPostion[letter][2];
    //   Y2 = AlphabetPostion[letter][3];
    // } else {
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
      console.log(position.x, X1, X2, position.y, Y1, Y2);
    } else {
      setIsVisible(true);
      setConfirmationText("Oops! Please Try Again...");
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      console.log(position.x, X1, X2, position.y, Y1, Y2);
    }
  };

  //  const comparePosition = (e) => {
  //    if (e.nativeEvent.clientX >= Qposition[0] && e.nativeEvent.clientX <= Qposition[1] && e.nativeEvent.clientY - 94 >= Qposition[2] && e.nativeEvent.clientY - 94 <= Qposition[3]) {
  //      console.log("It works");
  //      console.log(e.clientX, Qposition[0], Qposition[1], e.clientY - 94, Qposition[2], Qposition[3]);
  //    } else {
  //      console.log("Try Again");
  //      console.log(e.clientX, Qposition[0], Qposition[1], e.clientY - 94, Qposition[2], Qposition[3]);
  //    }
  //  };

  // Timer Area

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once (on mount)

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
        {/* <img
          src={Abcd}
          alt="Number Game"
          onClick={(e) => {
            togglePopup(e);
            comparePosition(e);
          }}
        /> */}
        {/* <ImageWithClickCoordinates togglePopup={togglePopup} imgSrc={Abcd} /> */}
      </div>
      <Footer />
      {isVisible ? <div className="fixed top-[120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border rounded shadow-md">{confirmationText}</div> : null}
    </>
  );
}

export default GameTwo;