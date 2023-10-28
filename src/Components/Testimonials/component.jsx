import "./styles.css";
import girl1 from "../../../src/assets/images/girl-denim-shirt.jpg";
import man1 from "../../../src/assets/images/guy-black-shirt.jpg";
import girl2 from "../../../src/assets/images/girl-blue-shirt.jpg";
import StarRating from "./starRating";
import { motion } from "framer-motion";
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
    <div>
      <h2 className="review-title">Tour Reviews</h2>
      <div className="city-tour-reviews">
        {reviews.map((review) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, time: 1 }}
            className="review-box"
            key={review.id}
          >
            <div className="user-image">
              <img src={review.userImage} alt={`User ${review.id}`} />
            </div>
            <div className="rating">
              <StarRating rating={review.rating} />
            </div>
            <div className="review-text">{review.reviewText}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CityTourReviews;
