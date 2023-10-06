import NYC from "../../../src/assets/images/NYC.jpg";
import PHILLY from "../../../src/assets/images/philly.jpg";
import LA from "../../../src/assets/images/LA.jpg";
export default function Slider() {
  const cities = [
    {
      id: 1,
      cityImage: NYC,

      titleText: "Take a bite out of the big apple",
    },
    {
      id: 2,
      cityImage: PHILLY,

      titleText: "Brotherly love and soft pretzels",
    },
    {
      id: 3,
      cityImage: LA,

      titleText: "It's always a good dat to be in L.A.",
    },
  ];

  return (
    <div>
      <h2 className="review-title">City Tours</h2>
      <div className="city-tour-locations">
        {cities.map((city) => (
          <div className="city-box" key={city.id}>
            <div className="city-image">
              <img src={city.cityImage} alt={`city ${city.id}`} />
            </div>
            <div className="city-text">{city.titleText}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
