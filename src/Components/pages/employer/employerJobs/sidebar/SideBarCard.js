import React from "react";

function SideBarCard({ job,setMobileSectionState, setSelectedJob, selectedJob }) {
  const { jobTitle, jobLocation, createdAt } = job;
  return (
    <div
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
