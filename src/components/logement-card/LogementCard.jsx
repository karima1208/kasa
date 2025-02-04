import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const LogementCard = ({ logement }) => {
  return (
    <div className="logementCardContainer">
      <Link to={`/logement/${logement.id}`}>
        <div
          className="logementCardContent"
          style={{ backgroundImage: `url(${logement.cover})` }}
        >
          <div className="gradientHover">
            <div className="titleContainer">{logement.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LogementCard;
