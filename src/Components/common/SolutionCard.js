import { Grid } from "@mui/material";
import React from "react";
import "./SolutionCard.css"
import { DarkmodeContext } from "../../contex/darkmode/index";



function SolutionCard({ title, description, icon }) {
  const [state, dispatch] = React.useContext(DarkmodeContext);
  
  return (
    <Grid 
    // sx={{
    //   color: state.shades.secondary,
    //     backgroundColor: state.shades.primary,
     
    // }}
    item xs={12} sm={6} md={3}>
      <div 
      style={{
      color: state.shades.secondary,
      backgroundColor: state.shades.solutionCardBackground,
     
    }}
      className="solutionCard-container">
        <div>
          <img style={{ marginRight: '10px', maxWidth: "4rem" }} alt="icon" src={icon} />
        </div>
        <div className="solutionCard-title" >
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    </Grid>
  );
}

export default SolutionCard;