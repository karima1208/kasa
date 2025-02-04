import React, { useEffect, useState } from "react";
import "./styles.scss";

const Rating = ({ rating }) => {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    let starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        starsArray.push("active");
      } else {
        starsArray.push("inactive");
      }
    }
    setStars(starsArray);
  }, []);
  return (
      <div>
        {stars.map((star, i) =>
          star === "active" ? (
            <i class="fa-solid fa-star fullStar" key={i}></i>
          ) : (
            <i class="fa-solid fa-star emptyStar" key={i}></i>
          )
        )}
      </div>
  );
};

export default Rating;
