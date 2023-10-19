import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const APIKEY = import.meta.env.VITE_API_KEY;
export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 40.763612286505115,
      lng: -73.97729908419647,
    },
    zoom: 14,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: "500px",
        minWidth: "300px",
        padding: "50px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 className="review-title">Our Location</h2>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: APIKEY,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={40.763612286505115}
          lng={-73.97729908419647}
          text={
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "red", height: "2em" }}
            />
          }
        />
      </GoogleMapReact>
    </div>
  );
}
