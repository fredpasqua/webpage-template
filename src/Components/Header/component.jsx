import "./styles.css";
import walking from "../../../src/assets/images/citywalking.jpg";
import { Button } from "react-bootstrap";
export default function Header(props) {
  return (
    <>
      <div className="HeaderBox">
        <div className="HeaderText">
          <h2>City Tours USA</h2>
          <p>Explore your favorite city in a whole new way.</p>
          <Button className="Header-Button" onClick={() => props.handleClick()}>
            Book A Tour
          </Button>
        </div>
        <div className="HeaderBoxImage">
          <img src={walking} alt="couple walking"></img>
        </div>
      </div>
    </>
  );
}
