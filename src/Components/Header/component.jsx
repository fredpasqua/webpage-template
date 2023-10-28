import "./styles.css";
import walking from "../../../src/assets/images/citywalking.jpg";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Header(props) {
  return (
    <>
      <div className="HeaderBox">
        <div className="HeaderBoxImage">
          <motion.img
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            src={walking}
            alt="couple walking"
          ></motion.img>
        </div>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
          className="HeaderText"
        >
          <h2>Make a connection</h2>
          <p>
            We provide the best and most creative tours that allow you to
            explore your favorite city in a whole new way.
          </p>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              className="Header-Button"
              onClick={() => props.handleClick()}
            >
              Book A Tour
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
