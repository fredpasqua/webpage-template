import Header from './Components/Header/component.jsx';
import Banner from './Components/HeroBanner/component.jsx';
import BasicExample from "./Components/Navigation/navbar.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [heroBanner, setHeroBanner] = useState(false);
  const [header, setHeader] = useState(true);
  const handleClick = () => {
    setHeroBanner(!heroBanner);
    setHeader(!header);
  };
  return (
    <>
      <BasicExample />
      <div className="app-displayer">
        {header ? <Header handleClick={handleClick} /> : null}
        {heroBanner ? <Banner /> : null}
      </div>
    </>
  );
}

export default App
