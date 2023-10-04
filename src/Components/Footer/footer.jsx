import "./footer.css";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <p>1818 East High Street</p>
          <p>New York, NY 10001</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <p>Copyright FPDESIGNS 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
