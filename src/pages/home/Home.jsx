import React, { useState } from "react";
import logements from "../../../data/data.json";
import LogementCard from "../../components/logement-card/LogementCard";
import './styles.scss'
import Banner from "../../components/banner/banner";
import BannerImage from '../../assets/images/banner-home.jpeg'

const Home = () => {
  return (
    <div>
        <Banner bgImage={BannerImage} text='Chez vous, partout et ailleurs'/>
      <div className="logementsContainer">
        {logements.map((logement) => (
          <LogementCard logement={logement} key={logement.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
