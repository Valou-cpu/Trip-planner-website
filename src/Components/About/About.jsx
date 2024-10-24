import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left"></div>
      <img src={about_img} alt="" className="about-img" />
      <img src={play_icon} alt="" className="play-icon" />
      <div className="about-right">
        <h3>ABOUT OUR WEBSITE</h3>
        <h2>Making you trip the best it can be</h2>
      </div>
    </div>
  );
};

export default About;
