import React,{ useContext } from "react";
import './LandingPage.css'
import { DarkmodeContext } from "../../contex/darkmode";

function RightJobSection() {
  const[ state, dispatch  ] = useContext(DarkmodeContext)
  return (
    <div className="right-job-container" 
    style={{
      color: state.shades.secondary,
        backgroundColor: state.shades.primary,
      
    }}
    >
      <h1>
        Get The <span> Right Job </span>
        You Deserve
      </h1>
      <h2>786 jobs & 110 candidates are registeresd</h2>
    </div>
  );
}

export default RightJobSection

