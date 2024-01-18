import Navbar from "./Navbar";
import Footer from "./Footer";
import OneTwo from "../assets/1234.jpg";
import Abcd from "../assets/ABCD.jpg";
import Animals from "../assets/animals.jpg";
import Waldo from "../assets/waldo.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

function HighScore() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          setScores(data);
        } else {
          console.error("Failed to retrieve scores");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchScores();
  }, []);

  // Filter and sort scores with gameName "Find Lost Letters"
  const LettersScores = scores
    .filter((score) => score.gameName === "Find Lost Letters")
    .sort((a, b) => {
      // Convert time to numeric value for comparison
      const timeA = parseInt(a.time, 10);
      const timeB = parseInt(b.time, 10);

      return timeA - timeB;
    });

  // Filter and sort scores with gameName "Find Lost Animals"
  const AnimalScores = scores
    .filter((score) => score.gameName === "Find Lost Animals")
    .sort((a, b) => {
      // Convert time to numeric value for comparison
      const timeA = parseInt(a.time, 10);
      const timeB = parseInt(b.time, 10);

      return timeA - timeB;
    });

  // Filter and sort scores with gameName "Find Lost Characters"
  const CharacterScores = scores
    .filter((score) => score.gameName === "Find Lost Characters")
    .sort((a, b) => {
      // Convert time to numeric value for comparison
      const timeA = parseInt(a.time, 10);
      const timeB = parseInt(b.time, 10);

      return timeA - timeB;
    });

  return (
    <>
      <Navbar />
      <div className="bg-blue-300    p-5    min-h-[100vh]">
        {/* Image Section */}
        <section className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700 text-center text-xl font-bold mb-2">Find Lost Characters!</p>
              <img src={Waldo} alt="Waldo" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-r">Player</th>
                      <th className="py-2 px-4">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CharacterScores.map((score) => (
                      <tr key={score._id}>
                        <td className="py-2 px-4 border-r text-center">{score.playerName}</td>
                        <td className="py-2 px-4  text-center">{score.time} seconds</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700 text-center text-xl font-bold mb-2">Find Lost Letters!</p>
              <img src={Abcd} alt="Abcd" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-r">Player</th>
                      <th className="py-2 px-4">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LettersScores.map((score) => (
                      <tr key={score._id}>
                        <td className="py-2 px-4 border-r text-center">{score.playerName}</td>
                        <td className="py-2 px-4  text-center">{score.time} seconds</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700 text-center text-xl font-bold mb-2">Find Lost Animals!</p>
              <img src={Animals} alt="OneTwo" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-r">Player</th>
                      <th className="py-2 px-4">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AnimalScores.map((score) => (
                      <tr key={score._id}>
                        <td className="py-2 px-4 border-r text-center">{score.playerName}</td>
                        <td className="py-2 px-4  text-center">{score.time} seconds</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HighScore;
