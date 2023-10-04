import "./styles.css";
import StarRating from "./starRating";

const CityTourReviews = () => {
  // Sample review data (you can replace it with your own data)
  const reviews = [
    {
      id: 1,
      userImage: "../../../public/images/girl-denim-shirt.jpg",
      rating: 5,
      reviewText: "Amazing city tour experience!",
    },
    {
      id: 2,
      userImage: "../../../public/images/guy-black-shirt.jpg",
      rating: 4,
      reviewText: "Great tour guide and interesting sights.",
    },
    {
      id: 3,
      userImage: "../../../public/images/girl-blue-shirt.jpg",
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
