import { Button } from "@mui/material";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useEffect } from "react";
import Messagearea from "../../../../common/messageArea/index";
import { db } from "../../../../../firebaseConfig/index";
import { v4 as uuid } from "uuid";

//  bottom navigation

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { purple } from "@mui/material/colors";

function MessageArea({
  allConversations,
  setSelectedSectionMobile,
  currentSelectedMessage,
}) {
  const [value, setValue] = React.useState(0);
  let user = JSON.parse(localStorage.getItem("user"));
  let user_id = user.uid;
  const submitMessage = (text) => {
    console.log(currentSelectedMessage);
    const conversation_doc_id = uuid();
    // update the last message in the last_message collection
    setDoc(
      doc(db, "last_messages", currentSelectedMessage.last_message_id),
      {
        last_message: text,
      },
      { merge: true }
    );
    // add a new document to the conversation collection
    setDoc(doc(db, "conversations", conversation_doc_id), {
      conversation_id: currentSelectedMessage.conversation_id,
      createdAt: new Date(),
      message: text,
      conversation_doc_id,
      by: "employer",
      user_id,
    });
  };
  const updateSeen = async () => {
    const q = await query(
      collection(db, "conversations"),
      where("conversation_id", "==", currentSelectedMessage.conversation_id)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.forEach((doc_) => {
        const data = doc_.data();
        if (data.user_id !== user_id && !data.seen) {
          setDoc(
            doc(db, "conversations", data.conversation_doc_id),
            {
              seen: true,
            },
            { merge: true }
          );
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (currentSelectedMessage) {
      // add a property seen=true to all conversation
      // where the conversation id is equal to the current selected message conversation id
      // and the user id should not be equal to the current user id

      updateSeen();
    }
  }, [currentSelectedMessage, allConversations]);
  return (
    <div>
      {/* <Button
        variant="contained"
        color="primary"
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          position: "absolute",
        }}
        onClick={() => setSelectedSectionMobile("sidebar")}
      >
        back
      </Button> */}
      <Messagearea
        allConversations={allConversations}
        submitMessage={submitMessage}
      />
      <Box sx={{ width: "100%" , margin: "auto"}}>
        <BottomNavigation
        //  md={3}
          sx={{
            display: {
              xs: "block",
              md: "none",
              lg: "none",
            },
            width: "90%",
            margin: "0.5rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "purple",
              width: "5rem",
              position: "absolute",
              bottom: 0,
              left: "40%",
              margin: "0.5rem",
            }}
            onClick={() => setSelectedSectionMobile("sidebar")}
          >
            back
          </Button>
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default MessageArea;
