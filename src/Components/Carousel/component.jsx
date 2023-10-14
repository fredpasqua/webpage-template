import NYC from "../../../src/assets/images/NYC.jpg";
import PHILLY from "../../../src/assets/images/philly.jpg";
import LA from "../../../src/assets/images/LA.jpg";
import "./styles.css";
import "animate.css";
import { useInView } from "react-intersection-observer";
export default function Badge() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
  });
  const cities = [
    {
      id: 1,
      name: "New York, NY",
      cityImage: NYC,
      shortCopy:
        "In New York, join the 'Pizza Parade' tour, where you'll discover that there's no slice like the Big Apple's slice. Warning: You might leave with a pizza-shaped heart, but you won't regret a single cheesy bite!",

      titleText: "Take a bite of the big apple",
    },
    {
      id: 2,
      name: "Philadelphia, PA",
      cityImage: PHILLY,
      shortCopy:
        "Philadelphia's 'Cheesesteak Shuffle' tour will have you waddling from one iconic cheesesteak joint to another, in a quest to crown the city's cheesesteak champion. You'll leave \"wit\" great memories.",

      titleText: "Brotherly love wit great eats!",
    },
    {
      id: 3,
      name: "Los Angeles, CA",
      cityImage: LA,
      shortCopy:
        "Los Angeles' 'Star-Studded Stroll' tour promises a glamorous journey through the city's sidewalks, where you can pretend to be an A-lister while trying to spot actual A-listers. Even the palm trees have agents!",
      titleText: "Rub elbows with the stars",
    },
    // {
    //   id: 4,
    //   name: "Chicago, IL",
    //   cityImage: PHILLY,
    //   shortCopy:
    //     "Experience the Windy City's vibrant culture, iconic architecture, and world-class cuisine. Don't forget to take an architecture boat tour along the Chicago River and savor a classic Chicago-style hot dog at the famous Portillo's!",
    //   titleText: "Discover the Charm of the Windy City",
    // },
    // {
    //   id: 5,
    //   name: "Phoenix, AZ",
    //   cityImage: "Phoenix_Image_URL",
    //   shortCopy:
    //     "Experience the desert beauty of Phoenix, Arizona. Hike the Camelback Mountain, visit the Desert Botanical Garden, and enjoy the vibrant Southwestern cuisine. Don't miss the stunning sunsets in the Valley of the Sun!",
    //   titleText: "Explore the Desert Oasis",
    // },
    // {
    //   id: 6,
    //   name: "Denver, CO",
    //   cityImage: "Denver_Image_URL",
    //   shortCopy:
    //     "Discover the Mile-High City, Denver. Explore the Rocky Mountains, stroll through the historic Larimer Square, and indulge in craft beer at local breweries. With its outdoor adventures and cultural attractions, Denver has something for everyone!",
    //   titleText: "Adventures Await in Denver",
    // },
    // {
    //   id: 7,
    //   name: "Las Vegas, NV",
    //   cityImage: "LasVegas_Image_URL",
    //   shortCopy:
    //     "Experience the dazzling lights and entertainment of Las Vegas. From world-class shows and casinos on the Strip to the natural wonders of Red Rock Canyon, Las Vegas offers a unique blend of excitement and natural beauty.",
    //   titleText: "Entertainment Capital of the World",
    // },
  ];

  return (
    <div>
      <h2 className="review-title">City Tours</h2>
      <div className="city-tour-container">
        {cities.map((city) => (
          <div
            key={city.id}
            ref={ref}
            className={`city-box 
            ${inView ? "animate__animated animate__fadeInLeftBig" : "hide"}`}
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
