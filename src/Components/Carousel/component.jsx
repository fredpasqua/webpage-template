import NYC from "../../../src/assets/images/NYC.jpg";
import PHILLY from "../../../src/assets/images/philly.jpg";
import LA from "../../../src/assets/images/LA.jpg";
import CHITOWN from "../../../src/assets/images/Chicago.jpg";
import PHOENIX from "../../../src/assets/images/phoenix.jpg";
import Denver from "../../../src/assets/images/Denver.jpg";
import "./styles.css";
import "animate.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Badge() {
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
        "Experience NYC's 'Pizza Parade' tour for an unforgettable taste of the Big Apple. Warning: Your heart may become pizza-shaped, but you won't regret a single cheesy bite!",
      titleText: "Savor the Big Apple",
    },
    {
      id: 2,
      name: "Philadelphia, PA",
      cityImage: PHILLY,
      shortCopy:
        "Discover Philly's 'Cheesesteak Shuffle' tour, a quest to crown the city's cheesesteak champion. You'll leave with great memories, 'wit' a full stomach!",
      titleText: "Cheesesteak Quest in Philly",
    },
    {
      id: 3,
      name: "Los Angeles, CA",
      cityImage: LA,
      shortCopy:
        "Explore LA's 'Star-Studded Stroll' tour and pretend to be an A-lister while trying to spot actual stars. Even the palm trees have agents in this glamorous journey!",
      titleText: "Glamour in Los Angeles",
    },
    {
      id: 4,
      name: "Chicago, IL",
      cityImage: CHITOWN,
      shortCopy:
        "Experience the culture, architecture, and cuisine of the Windy City. Take an architecture boat tour along the Chicago River and savor a classic Chicago-style hot dog at Portillo's!",
      titleText: "Chicago Delights",
    },
    {
      id: 5,
      name: "Phoenix, AZ",
      cityImage: PHOENIX,
      shortCopy:
        "Explore the desert beauty of Phoenix, Arizona. Hike Camelback Mountain, visit the Desert Botanical Garden, and savor vibrant Southwestern cuisine. Don't miss the stunning sunsets!",
      titleText: "Discover the Desert Oasis",
    },
    {
      id: 6,
      name: "Denver, CO",
      cityImage: Denver,
      shortCopy:
        "Discover Denver, the Mile-High City. Explore the Rocky Mountains, stroll through historic Larimer Square, and indulge in craft beer at local breweries. Denver has something for everyone!",
      titleText: "Adventures in Denver",
    },
    {
      id: 7,
      name: "Las Vegas, NV",
      cityImage: "LasVegas_Image_URL",
      shortCopy:
        "Experience the dazzling lights and entertainment of Las Vegas, from world-class shows to the natural wonders of Red Rock Canyon. Las Vegas offers excitement and natural beauty!",
      titleText: "Las Vegas Entertainment",
    },
  ];

  return (
    <>
      <div>
        <section className="tourText">
          <h2 className="review-title">City Tours</h2>
          <p className="tour-text">
            Explore the heart of the city like never before with our
            one-of-a-kind walking tour company, where every step tells a story.
            We specialize in crafting unforgettable urban adventures that delve
            deep into the hidden gems and untold tales of our vibrant
            metropolis.{" "}
          </p>
        </section>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
        >
          <div>
            <div className="city-tour-container">
              <a className="city-link">
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
                <a className="city-link">
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
                <a className="city-link">
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
                <a className="city-link">
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
                <a className="city-link">
                  <div className="city-image">
                    <img
                      src={cities[4].cityImage}
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
                <a className="city-link">
                  <div className="city-image">
                    <img
                      src={cities[5].cityImage}
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
      </div>
    </>
  );
}
