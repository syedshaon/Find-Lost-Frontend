import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FinishPop({ time, cancelformSubmit }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const submitForm = () => {
    navigate("/");
  };
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-8 border border-blue-500 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Congratulations! You found them all!</h1>
      <p className="mb-4">You took {time} to complete.</p>
      <p className="mb-4">Please enter your name to save it to the database.</p>

      <form onSubmit={submitForm}>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
  );
}

export default FinishPop;
