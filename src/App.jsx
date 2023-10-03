import Header from './Components/Header/component.jsx';
import Banner from './Components/HeroBanner/component.jsx';
import BasicExample from "./Components/Navigation/navbar.jsx";
import { useState } from "react";
import "./App.css";

function App() {
 
  const handleClick = () => {
    alert("button clicked");
  };
  return (
    <>
      <BasicExample />
      <div className="app-displayer">
        <Header handleClick={handleClick} />
        <Banner />
      </div>
    </>
  );
}

export default App
