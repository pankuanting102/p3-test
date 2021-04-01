import React from 'react'
import { Link } from "react-router-dom";

const GameOver = ({ gameScore }) => {
  // change trigger above

  return (
    <div>
      Game Over! Summary
      <div className="score">{gameScore}</div>
      <button style={{marginTop: "60px" }} className="cta-outline">
<Link to="/Dashboard"></Link>
        Confirm Score
      </button>
    </div>
  );
};

export default GameOver;

// take score from the user in App.js (line20 for user state)

// pass the user to the scoreboard/progressbar
