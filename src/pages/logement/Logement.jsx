import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../../../data/data.json";
import "./styles.scss";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const activeLogement = logements.find((logement) => logement.id === id);
    if (activeLogement) {
      setLogement(activeLogement);
      setLoading(false);
    } else {
      navigate("/error-404");
    }
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Carousel logement={logement} />
      <div className="logementInfoContainer">
        <div>
          <h1 className="logementTitle">{logement.title}</h1>
          <p className="logementLocation">{logement.location}</p>
          <div className="tagsContainer">
            {logement.tags.map((tag,i) => (
              <div className="tag" key={i}>{tag}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="logementHostContainer">
            <div className="logementHostName">
              <div>{logement.host.name.split(" ")[0]}</div>
              <div>{logement.host.name.split(" ")[1]}</div>
            </div>
            <img className="logementHostPicture" src={logement.host.picture} />
          </div>
          <div className="ratingContainer">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="logementCollapseContainer">
        <div className="logementCollapse">
          <Collapse
            item={{ title: "Description", content: logement.description }}
          />
        </div>
        <div className="logementCollapse">
          <Collapse
            item={{ title: "Équipements", content: logement.equipments }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logement;
