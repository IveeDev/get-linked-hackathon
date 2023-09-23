import React from "react";
import "./GuideSection.scss";
import greyStar from "../../assets/images/grey-star.svg";
import guide from "../../assets/images/guidance.svg";

import guideMobile from "../../assets/images/guide-mobile.svg";
import whiteStar from "../../assets/images/white-star.svg";
import purpleflare from "../../assets/images/Purple-Lens-Flare-PNG.svg";

const GuideSection = () => {
  return (
    <section className="guide">
      <div className="container">
        <div className="guide__column container__left">
          <img
            src={greyStar}
            alt="Guide-grey-star"
            className="guide__grey-star"
          />
          <img
            src={purpleflare}
            alt="guide__purple"
            className="guide__purple-flare"
          />
          <h1 className="container__heading">
            Rules and
            <br /> <span className="container__heading-purple">Guidelines</span>
          </h1>
          <p className="container__paragraph  container__paragraph--px">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img
            src={whiteStar}
            alt="Guide-white-star"
            className="guide__white-star"
          />
        </div>

        <div className="guide__column container__right">
          <img src={guide} alt="guide" className="guide__photo" />

          <img
            src={guideMobile}
            alt="guide"
            className="guide__photo guide__photo--mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
