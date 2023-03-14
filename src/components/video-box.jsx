import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
const VideoBox = () => {
 
  return (
    <div id="Middle-Box" className="Box">
      <YoutubeEmbed embedId="35npVaFGHMY" />
      <br />
      <span>
        "India
        <br />
        is a place where
      </span>
      <div>
        <span>colour is</span>
        <br />
        <span>doubly bright.</span>
        <br />
        <span>Pinks</span>
        <br />
        <span>that scald your</span>
        <br />
        <span>EYES,*</span>
        <br />
        <span>blues you</span>
        <br />
        <span>could drown in."</span>
        <br />
        <span style={{ fontFamily: "Apple Chancery, cursive" }}>
          *The world is the body and India is its life
        </span>

        
      </div>
      <div className="slider">
      <AliceCarousel  autoPlay autoPlayInterval="3000">
       <img src={img1} className="sliderimg"/>
       <img src={img2} className="sliderimg"/>
       <img src={img3} className="sliderimg"/>
     </AliceCarousel>
      </div>
      <div>
        
        <span>
          Indian culture is the heritage of social norms and technologies that
          originated in or are associated with the ethno-linguistically diverse
          India. The term also applies beyond India to countries and cultures
          whose histories are strongly connected to India by immigration,
          <br />
          colonisation,or influence,particularly
          <br />
          in South Asia and 
           <br />
           Southeast Asia. India's languages, religions, 
           <br />
           dance, music, food
           <br />
           architecture, and 
           <br />
           customs differ from 
           <br />
           place to place within the country.
        </span>
      </div>
    </div>
  );
};

export default VideoBox;