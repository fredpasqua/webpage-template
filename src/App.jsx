import Header from './Components/Header/component.jsx';
import Banner from './Components/HeroBanner/component.jsx';
import NavScrollExample from "./Components/Navigation/navbar.jsx";
import './App.css'
const heroBanner = true;
const header = true; 


function App() {

  return (
    <>
      <NavScrollExample />
      {header ? <Header /> : null}
      {heroBanner ? <Banner /> : null}
    </>
  );
}

export default App
