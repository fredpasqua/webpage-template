import Header from './Components/Header/component.jsx';
import Banner from './Components/HeroBanner/component.jsx';
import Navigation from "./Components/Navigation/navbar.jsx";
import CityTourReviews from "./Components/Testimonials/component.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Badge from "./Components/Carousel/component.jsx";
import MapContainer from "./Components/GoogleMap/component.jsx";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("button clicked");
  };
  return (
    <>
      {/* <Navigation /> */}
      <div className="app-displayer">
        <Header handleClick={handleClick} />
        <Banner />
        <Badge />
        <CityTourReviews />
        <MapContainer />
      </div>
      <Footer />
    </>
  );
}

export default App
