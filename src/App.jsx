import Header from './Components/Header/component.jsx';
import Banner from './Components/HeroBanner/component.jsx';
import BasicExample from "./Components/Navigation/navbar.jsx";
import "./App.css";
const heroBanner = true;
const header = true;

function App() {
  return (
    <>
      <BasicExample />
      <div className="app-displayer">
        {header ? <Header /> : null}
        {heroBanner ? <Banner /> : null}
      </div>
    </>
  );
}

export default App
