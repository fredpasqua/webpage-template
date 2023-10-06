import NYC from "../../../src/assets/images/NYC.jpg";
import PHILLY from "../../../src/assets/images/philly.jpg";
import LA from "../../../src/assets/images/LA.jpg";
import "./styles.css";
import "animate.css";
export default function Slider() {
  const cities = [
    {
      id: 1,
      name: "New York, NY",
      cityImage: NYC,
      shortCopy:
        "In New York, join the 'Pizza Parade' tour, where you'll discover that there's no slice like the Big Apple's slice. Warning: You might leave with a pizza-shaped heart, but you won't regret a single cheesy bite!",

      titleText: "Take a bite out of the big apple",
    },
    {
      id: 2,
      name: "Philadelphia, PA",
      cityImage: PHILLY,
      shortCopy:
        "Philadelphia's 'Cheesesteak Shuffle' tour will have you waddling from one iconic cheesesteak joint to another, in a quest to crown the city's cheesesteak champion. Just remember, it's not about the calories; it's about the cheese-tastic memories!",

      titleText: "Brotherly love wit great eats!",
    },
    {
      id: 3,
      name: "Los Angeles, CA",
      cityImage: LA,
      shortCopy:
        "Los Angeles' 'Star-Studded Stroll' tour promises a glamorous journey through the city's sidewalks, where you can pretend you're an A-lister while trying to spot actual A-listers. Remember, in LA, even the palm trees have agents!",
      titleText: "Rub elbows with the stars",
    },
  ];

  return (
    <div>
      <h2 className="review-title">City Tours</h2>
      <div className="city-tour-container">
        {cities.map((city) => (
          <div
            className="city-box animate__animated animate__fadeInLeftBig"
            key={city.id}
          >
            <a className="city-link" href="#">
              <div className="city-image">
                <img src={city.cityImage} alt={`city ${city.id}`} />
              </div>
            </a>
            <h3 className="city-name">{city.name}</h3>
            <section className="city-text">{city.titleText}</section>
            <div className="short-copy">{city.shortCopy}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
