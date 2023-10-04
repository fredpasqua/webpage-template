import Header from './Components/Header/component.jsx';
import Banner from './Components/HeroBanner/component.jsx';
import BasicExample from "./Components/Navigation/navbar.jsx";
import CityTourReviews from "./Components/Testimonials/component.jsx";

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
        <CityTourReviews />
      </div>
    </>
  );
}

export default App
