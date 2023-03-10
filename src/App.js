// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navs from "./Navs";
import { UserContextProvider } from "./contex/usercontex/index";
import { DarkmodeContextProvider } from "./contex/darkmode/index";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";

function App() {
  return (
    <div className="App">
      <DarkmodeContextProvider>
      <UserContextProvider>
        <ReactNotifications />
        <Navs />
      </UserContextProvider>
      </DarkmodeContextProvider>
    </div>
  );
}

export default App;
