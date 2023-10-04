import "./styles.css";
import girl1 from "../../../src/assets/images/girl-denim-shirt.jpg";
import man1 from "../../../src/assets/images/guy-black-shirt.jpg";
import girl2 from "../../../src/assets/images/girl-blue-shirt.jpg";
import StarRating from "./starRating";

// import guy from "../../../src/assets/images/guy-black-shirt.jpg";
// import girlBlueShirt from "../../../src/assets/images/girl-blue-shirt.jpg";
const CityTourReviews = () => {
  // Sample review data (you can replace it with your own data)
  const reviews = [
    {
      id: 1,
      userImage: girl1,
      rating: 3.5,
      reviewText: "Amazing city tour experience!",
    },
    {
      id: 2,
      userImage: man1,
      rating: 4,
      reviewText: "Great tour guide and interesting sights.",
    },
    {
      id: 3,
      userImage: girl2,
      rating: 5,
      reviewText: "I would highly recommend this tour to everyone.",
    },
  ];

  return (
    <div className="city-tour-reviews">
      {reviews.map((review) => (
        <div className="review-box" key={review.id}>
          <div className="user-image">
            <img src={review.userImage} alt={`User ${review.id}`} />
          </div>
          <div className="rating">
            {/* Assuming you have a StarRating component */}
            <StarRating rating={review.rating} />
          </div>
          <div className="review-text">{review.reviewText}</div>
        </div>
      ))}
    </div>
  );
};

export default CityTourReviews;
