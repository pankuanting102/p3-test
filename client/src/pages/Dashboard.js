// import React, { useState, useEffect, useRef } from "react";
// import React, { useState, useEffect, useRef } from "react";

// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row } from "../components/Grid";
// import { Table, Tr, Td } from "../components/Table";
// import { ForwardRefInput, FormBtn } from "../components/Form";
import ProgressBar from "../components/PointTimeline";
import PointText from "../components/PointText";
import TwitterBtn from "../components/TwitterBtn";
import { Link } from 'react-router-dom';
function Dashboard(props) {
  // Setting our component's initial state
  return (
    <div >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontcolor: "white",
        }}
      >
        Hello, {props.name}!
      </h1>
      <ProgressBar user={props} />
	  <div  style={{
          textAlign: "center"
        }} >
      <PointText/>
      <TwitterBtn />
      <button className="cta">
	  <Link to="/TheChallenge" style={{color:"white", }}>Play Again</Link>
   	</button>
	  </div>
    </div>
  );
}

export default Dashboard;
