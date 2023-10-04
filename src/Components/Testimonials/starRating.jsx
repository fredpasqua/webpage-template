import React from "react";

const StarRating = ({ rating }) => {
  // Calculate the number of filled and unfilled stars
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
  const unfilledStars = 5 - filledStars - halfStar;

  // Create an array of star elements
  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="star">
        &#9733;
      </span>
    );
  }
  if (halfStar === 1) {
    stars.push(
      <span key="half" className="star half">
        &#9733;
      </span>
    );
  }
  for (let i = 0; i < unfilledStars; i++) {
    stars.push(
      <span key={i + filledStars + halfStar} className="star">
        &#9734;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
