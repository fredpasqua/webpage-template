import "./styles.css";
import walking from "../../../src/assets/images/citywalking.jpg";
import { Button } from "react-bootstrap";
export default function Header(props) {
  return (
    <>
      <div className="HeaderBox">
        <div className="HeaderText">
          <div className="HeaderBoxImage">
            <img src={walking} alt="couple walking"></img>
          </div>
          <h2>Make a connection</h2>
          <p>
            We provide the best and most creative tours that allow you to
            explore your favorite city in a whole new way.
          </p>
          <Button className="Header-Button" onClick={() => props.handleClick()}>
            Book A Tour
          </Button>
        </div>
      </div>
    </>
  );
}
