import { Grid } from "@mui/material";
import React from "react";
import "./commonTable.css";
import { DarkmodeContext } from "../../../contex/darkmode/index";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
function CommmonTable({ data, columns, handleClick = null }) {
  const [state, dispatch] = React.useContext(DarkmodeContext);

  return (
    <div style={{ maxWidth: "90%", margin: "auto" }}>
      <div
        className="table-head"
        style={{
          color: state.shades.secondary,
          backgroundColor: state.shades.candidateapplication,
          // candidateapplicationrowcard
        }}
      >
        {columns.map((column, index) => {
          return (
            <div
              key={index}
              style={{
                width: column.width ? column.width : "25%",
              }}
            >
              {column.title}
            </div>
          );
        })}
      </div>
      {data.map((row, q) => {
        return (
          <div
            className="table-row"
            style={{
              color: state.shades.secondary,
              backgroundColor: state.shades.candidateapplicationrowcard,
              // candidateapplicationrowcard
            }}
            key={q}
          >
            {columns.map((column, j) => {
              if (column.type === "date") {
                return (
                  <div
                    style={{
                      width: column.width ? column.width : "25%",
                    }}
                    key={j}
                  >
                    {row[column.dataIndex].toDate().toDateString()}
                  </div>
                );
              } else if (column.dataIndex === "status") {
                if (row[column.dataIndex] === "applied") {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: column.width ? column.width : "25%",
                      }}
                      key={j}
                    >
                      <PendingActionsIcon
                        sx={{
                          color: "#FFC107",
                        }}
                      />
                      <div>Applied</div>
                    </div>
                  );
                } else if (row[column.dataIndex] === "rejected") {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: column.width ? column.width : "25%",
                      }}
                      key={j}
                    >
                      <ThumbDownOffAltIcon
                        sx={{
                          color: "red",
                        }}
                      />
                      <div className="rejected"> Rejected</div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: column.width ? column.width : "25%",
                      }}
                      key={j}
                    >
                      <ThumbUpOffAltIcon
                        sx={{
                          color: "green",
                        }}
                      />
                      <div className="accepted"> Accepted</div>
                    </div>
                  );
                }
              } else if (column.type === "file") {
                return (
                  <a
                    key={j}
                    className="resume-btn"
                    href={row[column.dataIndex]}
                    target="__blank"
                  >
                    View resume
                  </a>
                );
              } else if (
                column.type === "action"
                /* && row["status"] !== "accepted"  */
              ) {
                return (
                  <div
                    key={j}
                    // className={  `${row["status"] === "accepted"} ? action-btn-div-hidden  : action-btn-div`}
                  >
                    {column.childrenAction.map((item, p) => {
                      return (
                        // row.status
                        //row['status']

                        <button
                          className={
                            row["status"] === "accepted"
                              ? "action-btn-hidden"
                              : "action-btn "
                          }
                          key={p}
                          disabled={row["status"] === "accepted" ? true : false}
                          onClick={() => handleClick(item.action, row)}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                );
              } else {
                return (
                  <div
                    style={{ width: column.width ? column.width : "25%" }}
                    key={j}
                  >
                    {row[column.dataIndex]}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CommmonTable;
//?   row[column.dataIndex] ===row["company_name"] === Google
//?   row[column.dataIndex] ===row["jobTitle"] ===software engineer
//?   rew[column.dataIndex] ===row["createdAt"] === 2021-10-10

// data=[
// { //? row1
// jobTitle: "Software Engineer",
// createdAt: "2021-10-10",
// status: "Applied"
//companyName: "Google"
// },

//! columns

// {//? row2
// jobTitle: "Software Engineer",
// createdAt: "2021-10-10",
// status: "Applied"
//companyName: "Google"
// }
// ]
