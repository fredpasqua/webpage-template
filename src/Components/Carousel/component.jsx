import NYC from "../../../src/assets/images/NYC.jpg";
import PHILLY from "../../../src/assets/images/philly.jpg";
import LA from "../../../src/assets/images/LA.jpg";
import "./styles.css";
import "animate.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from "react-intersection-observer";
export default function Badge() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
  });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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

      titleText: "Brotherly love wit great eats",
    },
    {
      id: 3,
      name: "Los Angeles, CA",
      cityImage: LA,
      shortCopy:
        "Los Angeles' 'Star-Studded Stroll' tour promises a glamorous journey through the city's sidewalks, where you can pretend to be an A-lister while trying to spot actual A-listers. Even the palm trees have agents!",
      titleText: "Rub elbows with the stars",
    },
    {
      id: 4,
      name: "Chicago, IL",
      cityImage: PHILLY,
      shortCopy:
        "Experience the Windy City's vibrant culture, iconic architecture, and world-class cuisine. Don't forget to take an architecture boat tour along the Chicago River and savor a classic Chicago-style hot dog at the famous Portillo's!",
      titleText: "Discover the the Windy City",
    },
    {
      id: 5,
      name: "Phoenix, AZ",
      cityImage: "Phoenix_Image_URL",
      shortCopy:
        "Experience the desert beauty of Phoenix, Arizona. Hike the Camelback Mountain, visit the Desert Botanical Garden, and enjoy the vibrant Southwestern cuisine. Don't miss the stunning sunsets in the Valley of the Sun!",
      titleText: "Explore the Desert Oasis",
    },
    {
      id: 6,
      name: "Denver, CO",
      cityImage: "Denver_Image_URL",
      shortCopy:
        "Discover the Mile-High City, Denver. Explore the Rocky Mountains, stroll through the historic Larimer Square, and indulge in craft beer at local breweries. With its outdoor adventures and cultural attractions, Denver has something for everyone!",
      titleText: "Adventures Await in Denver",
    },
    {
      id: 7,
      name: "Las Vegas, NV",
      cityImage: "LasVegas_Image_URL",
      shortCopy:
        "Experience the dazzling lights and entertainment of Las Vegas. From world-class shows and casinos on the Strip to the natural wonders of Red Rock Canyon, Las Vegas offers a unique blend of excitement and natural beauty.",
      titleText: "Entertainment Capital of the World",
    },
  ];

  return (
    <>
      <h2 className="review-title">City Tours</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
      >
        <div>
          <div className="city-tour-container">
            <a className="city-link" href="#">
              <div key={0} className="city-box">
                <div className="city-image">
                  <img
                    src={cities[0].cityImage}
                    alt={`city ${cities[0].name}`}
                  />
                </div>

                <h3 className="city-name">{cities[0].name}</h3>
                <section className="city-text">{cities[0].titleText}</section>
                <div className="short-copy">{cities[0].shortCopy}</div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <div className="city-tour-container">
            <div key={1} className="city-box">
              <a className="city-link" href="#">
                <div className="city-image">
                  <img
                    src={cities[1].cityImage}
                    alt={`city ${cities[1].name}`}
                  />
                </div>
              </a>
              <h3 className="city-name">{cities[1].name}</h3>
              <section className="city-text">{cities[1].titleText}</section>
              <div className="short-copy">{cities[1].shortCopy}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="city-tour-container">
            <div key={2} className="city-box">
              <a className="city-link" href="#">
                <div className="city-image">
                  <img
                    src={cities[2].cityImage}
                    alt={`city ${cities[0].name}`}
                  />
                </div>
              </a>
              <h3 className="city-name">{cities[2].name}</h3>
              <section className="city-text">{cities[2].titleText}</section>
              <div className="short-copy">{cities[2].shortCopy}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="city-tour-container">
            <div key={3} className="city-box">
              <a className="city-link" href="#">
                <div className="city-image">
                  <img
                    src={cities[3].cityImage}
                    alt={`city ${cities[0].name}`}
                  />
                </div>
              </a>
              <h3 className="city-name">{cities[3].name}</h3>
              <section className="city-text">{cities[3].titleText}</section>
              <div className="short-copy">{cities[3].shortCopy}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="city-tour-container">
            <div key={4} className="city-box">
              <a className="city-link" href="#">
                <div className="city-image">
                  <img
                    src={cities[3].cityImage}
                    alt={`city ${cities[0].name}`}
                  />
                </div>
              </a>
              <h3 className="city-name">{cities[4].name}</h3>
              <section className="city-text">{cities[4].titleText}</section>
              <div className="short-copy">{cities[4].shortCopy}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="city-tour-container">
            <div key={5} className="city-box">
              <a className="city-link" href="#">
                <div className="city-image">
                  <img
                    src={cities[3].cityImage}
                    alt={`city ${cities[5].name}`}
                  />
                </div>
              </a>
              <h3 className="city-name">{cities[5].name}</h3>
              <section className="city-text">{cities[5].titleText}</section>
              <div className="short-copy">{cities[5].shortCopy}</div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
