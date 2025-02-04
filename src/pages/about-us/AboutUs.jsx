import React from "react";
import Banner from "../../components/banner/banner";
import BannerImage from "../../assets/images/banner-about.jpeg";
import Collapse from "../../components/collapse/Collapse";
import "./styles.scss";
import { aboutList } from "./collapseList";

const AboutUs = () => {
  return (
    <div>
      <Banner bgImage={BannerImage} text="" />
      <div className="collapseContainer">
        {aboutList.map((about) => (
          <Collapse item={about}/>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
