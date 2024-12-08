import React from 'react';
import '../stylings/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="background-stripes"></div>
      <div className="content">
        <div className="section">
          <h3>ABOUT US</h3>
          <p className="description">
            We are a community of Content writers who share their learnings.
          </p>
          <p className="details">
            uaisdbfuisdbfybbdsbadfisfivysdfsdbiforem ipsumajkbdfbbsdfoubbsfsdbs
            uaisdbfuisdbfybbdsbadfisfivysdfsdbiforem ipsumajkbdfbbsdfoubbsfsdbs
          </p>
          <a href="#read-more" className="read-more">Read More &gt;</a>
        </div>
        <div className="section">
          <h3>OUR MISSION</h3>
          <p className="description">
            Creating Valuable content for creatives all around the world
          </p>
          <p className="details">
            uaisdbfuisdbfybbdsbadfisfivysdfsdbiforem ipsumajkbdfbbsdfoubbsfsdbs
            uaisdbfuisdbfybbdsbadfisfivysdfsdbiforem ipsumajkbdfbbsdfoubbsfsdbs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
