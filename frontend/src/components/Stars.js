import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./Stars.scss";

const Stars = ({ value }) => {
  const stars = [];
  while (stars.length < 5) {
    if (value >= 1) {
      stars.push("StarIcon");
    } else if (value > 0.2 && value < 0.7) {
      stars.push("StarHalfIcon");
    } else {
      stars.push("StarBorderIcon");
    }
    value = value - 1;
  }

  const getStar = (value) => {
    switch (value) {
      case "StarIcon":
        return <StarIcon />;
      case "StarHalfIcon":
        return <StarHalfIcon />;
      case "StarBorderIcon":
        return <StarBorderIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="stars">
      {stars.map((value, i) => (
        <span key={i}>{getStar(value)}</span>
      ))}
    </div>
  );
};

export default Stars;
