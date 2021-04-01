import React from "react";
import { Link } from "react-router-dom";
import "./component.css";
const GameOver = ({ gameScore }) => {
  // change trigger above

  return (
    <div>
      <div className="go">Game Over!</div>
      <div className="score">{gameScore}</div>
      <button >
        <Link to="/Dashboard">
          <div className="cta-outline">
        Confirm Score
        </div>
        </Link>
      </button>
    </div>
  );
};

export default GameOver;

// take score from the user in App.js (line20 for user state)

// pass the user to the scoreboard/progressbar
