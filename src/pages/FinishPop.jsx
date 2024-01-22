import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FinishPop({ timeSpent, cancelformSubmit, gameName, time, gameId }) {
  const [submitStatusVisible, setSubmitStatusVisible] = useState(false);
  const [responseText, setResponseText] = useState("");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [playerName, setPlayerName] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log("trying 1");
    try {
      // console.log("trying 2");
      const response = await fetch(apiUrl + "/score-update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerName,
          gameId,
        }),
      });

      // console.log(response);

      if (response.ok) {
        setResponseText("Score inserted successfully!");
        setSubmitStatusVisible(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        // Optionally, you can reset the form or take other actions.
      } else {
        setResponseText("Failed to insert score");
        setSubmitStatusVisible(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      setResponseText("Error during fetch.");
      setSubmitStatusVisible(true);
      console.log("Error during fetch:", error);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    // navigate("/");
  };
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-8 border border-blue-500 rounded-md shadow-lg">
      {!submitStatusVisible && (
        <div>
          <h1 className="text-2xl font-bold mb-4 text-blue-500">Congratulations! You found them all!</h1>
          <p className="mb-4">You took {timeSpent} to complete.</p>
          <p className="mb-4">Please enter your name to save it to the database.</p>

          <form onSubmit={submitForm}>
            <input
              required
              type="text"
              value={playerName}
              onChange={(e) => {
                setPlayerName(e.target.value);
              }}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />

            <div className="flex space-x-4">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Submit
              </button>
              <button type="button" onClick={cancelformSubmit} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {submitStatusVisible && <h1 className="">{responseText}</h1>}
    </div>
  );
}

export default FinishPop;
