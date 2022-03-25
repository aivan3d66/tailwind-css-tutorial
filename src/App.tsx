import React from 'react';
import {Header} from './components/Header/Header';
import {LeftSidebar} from "./components/LeftSide/LeftSidebar";
import {CenterContent} from "./components/Center/CenterContent";
import {RightSidebar} from "./components/RightSide/RightSidebar";

function App() {
  return (
    <>
      <Header/>
      <div className='mobile:justify-center tablet:justify-between flex justify-between space-x-7 mt-16 h-full bg-slate-100'>
        <LeftSidebar/>
        <CenterContent/>
        <RightSidebar/>
      </div>
    </>
  );
}

export default App;
