import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "./MessageArea.css";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function MessageArea({ allConversations, submitMessage }) {
  const [text, setText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.uid;
  const [sortedConversations, setSortedConversations] =
    useState(allConversations);
  useEffect(() => {
    if (allConversations) {
      setSortedConversations(
        allConversations.sort((a, b) => {
          return a.createdAt.toDate() - b.createdAt.toDate();
        })
      );
    }
  }, [allConversations]);

  const submit = (e) => {
    e.preventDefault();
    submitMessage(text);
    setText("");
  };
  return (
    allConversations && (
      <form
        onSubmit={(e) => submit(e)}
        style={{
          width: "100%",
          height: "95vh",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          //  paddingRight: "2rem",
          // justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "grid",
            gridGap: "10px",
            padding: "2.5rem 0.8rem",
          }}
        >
          {sortedConversations &&
            sortedConversations.map((conversation, i) => {
              return (
                <div key={i}>
                  <div
                    className={
                      conversation.user_id === user_id
                        ? "send-by-user"
                        : "sent-by-other"
                    }
                  >
                    <div>{conversation.message}</div>
                    <p>
                      {moment(conversation.createdAt.toDate())
                        .format("lll")
                        .toString()}
                      {conversation.user_id === user_id && (
                        <CheckCircleIcon
                          size="small"
                          sx={{
                            fontSize: "16px",
                            marginLeft: "5px",
                            color: conversation.seen ? "green" : "gray",
                          }}
                        />
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <Grid
          container
          spacing={1}
          sx={{
            border: " 1px solid grey",
            borderRadius: "10px",
            margin: "0 5px",
            padding: "10px",
            position: "sticky  ",
            bottom: "0",
            top: "85%",
            width: "98%",
            background: "#fff",
          }}
        >
          <Grid item xs={10}>
            <TextField
              size="small"
              value={text}
              onChange={(e) => setText(e.target.value)}
              multiline={true}
              maxRows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Button type="submit">
              <SendIcon
                sx={{
                  color: user.type === "candidate" ? "green" : "blue",
                }}
              />
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  );
}

export default MessageArea;
