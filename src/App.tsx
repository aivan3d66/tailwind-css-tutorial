import React from 'react';
import {Header} from './components/Header/Header';
import {LeftSidebar} from "./components/LeftSide/LeftSidebar";
import {CenterContent} from "./components/Center/CenterContent";
import {RightSidebar} from "./components/RightSide/RightSidebar";

function App() {
  return (
    <div className="h-full border border-amber-400">
      <Header/>
      <div className="content-container">
        <LeftSidebar/>
        <CenterContent/>
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;
