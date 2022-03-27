import React from 'react';
import {Header} from './components/Header/Header';
import {LeftSidebar} from "./components/LeftSide/LeftSidebar";
import {CenterContent} from "./components/Center/CenterContent";
import {RightSidebar} from "./components/RightSide/RightSidebar";

function App() {
  return (
    <>
      <Header/>
      <div className="content-container">
        <LeftSidebar/>
        <CenterContent/>
        <RightSidebar/>
      </div>
    </>
  );
}

export default App;
