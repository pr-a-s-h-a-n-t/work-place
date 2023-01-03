import { Grid } from "@mui/material";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../firebaseConfig/index";
import React, { useEffect, useState } from "react";
import MessageArea from "./messageArea/index";
import SideBar from "./sidebar/index";
import { DarkmodeContext } from "../../../../contex/darkmode/index";

function EmployerConversation() {
  const [state, dispatch] = React.useContext(DarkmodeContext);
  const [allConversations, setAllConversations] = useState(null);
  const [selectedSectionMobile, setSelectedSectionMobile] = useState("sidebar");
  const [currentSelectedMessage, setCurrentSelectedMessage] = useState(null);
  const handleClick = async (message) => {
    console.log(message);
    setCurrentSelectedMessage(message);
    // fetch all the docs from the conversation collection,
    //  where the conversation id is equal to the
    //  conversation id of the message
    // subscribe to it

    const q = query(
      collection(db, "conversations"),
      where("conversation_id", "==", message.conversation_id)
    );
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setAllConversations(docs);
    });
  };

  useEffect(() => {
    if (allConversations) {
      setSelectedSectionMobile("messageArea");
    }
  }, [allConversations]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: "100%",
        height: "85vh",
        paddingTop: "1rem  ",
        color: state.shades.new,
        backgroundColor: state.shades.primary,
      }}
    >
      <Grid
        sx={{
          display: {
            xs: selectedSectionMobile === "sidebar" ? "block" : "none",
            md: "block",
          },
        }}
        item
        xs={12}
        md={3}
      >
        <SideBar
          currentSelectedMessage={currentSelectedMessage}
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        sx={{
          display: {
            xs: selectedSectionMobile === "messageArea" ? "block" : "none",
            md: "block",
          },
          marginTop: "2rem",
          height: "94%",
          overflowY: "auto",
          overflowX: "hidden",
          // backgroundColor: "",
          borderLeft: "10px solid black",

          boxSizing: "border-box",
          overflowWrap: "break-word",
        }}
        item
        xs={12}
        md={9}
      >
        {currentSelectedMessage && (
          <MessageArea
            setSelectedSectionMobile={setSelectedSectionMobile}
            currentSelectedMessage={currentSelectedMessage}
            allConversations={allConversations}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default EmployerConversation;
