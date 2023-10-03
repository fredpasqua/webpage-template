import "./styles.css";
import { Button } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <div className="HeaderBackground">
        <div className="HeaderBox">
          <div className="HeaderText">
            <h2>City Tours USA</h2>
            <Button className="Header-Button">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}
