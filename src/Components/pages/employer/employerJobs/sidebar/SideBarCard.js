import React from "react";
import { DarkmodeContext } from "../../../../../contex/darkmode/index";


function SideBarCard({ job,setMobileSectionState, setSelectedJob, selectedJob }) {
  const { jobTitle, jobLocation, createdAt } = job;
  const [state, dispatch] = React.useContext(DarkmodeContext);
  
  return (
    <div
  style={{
        color: state.shades.secondary,
        backgroundColor: state.shades.primary,
     
    }}

      onClick={() => 
        setMobileSectionState("jobform") || 
      setSelectedJob(job)}
      className={`sidebar-card-container ${
        job.job_id === selectedJob?.job_id && 
        `sidebar-card-container-selected`
      } `}
    >
      <div>{createdAt.toDate().toDateString()}</div>
      <div>{jobTitle}</div>
      <div>{jobLocation}</div>
      <hr></hr>
    </div>
  );
}

export default SideBarCard;
