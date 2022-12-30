import { Grid } from "@mui/material";
import React, { useState } from "react";
import SideBar from "./sidebar/index";
import JobForm from "./jobform/index";
function EmployerJobs() {
  const [mobileSectionState, setMobileSectionState] = useState("sidebar");
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <Grid container>
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
        <SideBar
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          setMobileSectionState={setMobileSectionState}
        />
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
           
        />
      </Grid>
    </Grid>
  );
}

export default EmployerJobs;
