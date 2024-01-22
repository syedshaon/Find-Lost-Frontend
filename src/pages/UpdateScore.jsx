import React from "react";
const apiUrl = import.meta.env.VITE_API_URL;

async function UpdateScore(gameId) {
  try {
    // console.log("trying 2");
    const response = await fetch(apiUrl + "/score-update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId,
      }),
    });

    // console.log(response);
  } catch (error) {
    console.log("Error during fetch:", error);
  }
}

export default UpdateScore;
