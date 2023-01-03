import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import { db } from "../../../../../firebaseConfig/index";
import SideBar from "../../../../common/sidebar/index";

import { DarkmodeContext } from "../../../../../contex/darkmode/index";

 


function Sidebar({ handleClick, currentSelectedMessage }) {
  const [state, dispatch] = React.useContext(DarkmodeContext);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const [lastMessages, setLastMessages] = useState(null);

  let docs = [];
  const fetchData = async () => {
    const q = query(
      collection(db, "last_messages"),
      where("candidate_id", "==", currentUser.uid)
    );
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      // let docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setLastMessages(docs);
    });
  };
  useEffect(() => {
    // fetch data from last message collection
    // get all the docs from last message collection where th employer id is equal to the current user id
    // subscribe to  it

    fetchData();
  }, [docs]);
  return (
    <div style={{
      color: state.shades.new,
        backgroundColor: state.shades.primary,
    }}>
      <SideBar
        currentSelectedMessage={currentSelectedMessage}
        lastMessages={lastMessages}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Sidebar;
