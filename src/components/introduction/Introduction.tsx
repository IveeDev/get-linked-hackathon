import "./Introduction.scss";
import idea from "../../assets/images/idea.svg";
import ideaMobile from "../../assets/images/big-idea-mobile.svg";
import ideaStar from "../../assets/images/idea-star.svg";
import introStar from "../../assets/images/intro-star.svg";
import arrow from "../../assets/images/arrow.svg";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="container">
        <img src={ideaStar} alt="idea" className="idea-star" />
        <div className="container__left">
          <img src={idea} alt="idea" className="container__photo--desktop" />

          <img
            src={ideaMobile}
            alt="idea"
            className="container__photo--mobile"
          />
        </div>

        <img src={arrow} alt="arrow" className="arrow" />

        <div className="container__right">
          <img src={introStar} alt="idea" className="intro-star" />
          <h1 className="container__heading">
            Introduction to getlinked
            <br />
            <span className="container__heading-purple">
              tech Hackathon 1.0
            </span>
          </h1>
          <p className="container__paragraph">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
