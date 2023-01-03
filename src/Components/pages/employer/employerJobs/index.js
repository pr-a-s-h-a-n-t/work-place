import { Grid } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./sidebar/index";
import JobForm from "./jobform/index";
import { DarkmodeContext } from "../../../../contex/darkmode/index";





function EmployerJobs() {
  const [state, dispatch] = React.useContext(DarkmodeContext);

  const [mobileSectionState, setMobileSectionState] = useState("sidebar");
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <Grid container 
    sx={{
      color: state.shades.secondary,
        backgroundColor: state.shades.primary,
    }}
    >
      <Grid
        sx={{
          display: {
            xs: mobileSectionState === "sidebar" ? "block" : "none",
            md: "block",
            
          },
        }}
        item
        xs={12}
        md={4}
      >
        <Sidebar 
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
        setMobileSectionState={setMobileSectionState} />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: {
            xs: mobileSectionState === "jobform" ? "block" : "none",
            md: "block",
          },
        }}
      >
        <JobForm 
        selectedJob={selectedJob} 
        setMobileSectionState={setMobileSectionState} />
      </Grid>
    </Grid>
  );
}

export default EmployerJobs;
