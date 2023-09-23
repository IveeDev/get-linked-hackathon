import bulb from "../../assets/images/bulb.svg";
import chain from "../../assets/images/chain.svg";
import spark from "../../assets/images/spark.svg";
import guy from "../../assets/images/hackathon-guy.png";
import guyMobile from "../../assets/images/gu.png";
import vector from "../../assets/images/Vector-1.svg";
import whitestar from "../../assets/images/white-star.svg";
import greystar from "../../assets/images/grey-star.svg";
import lens from "../../assets/images/Purple-Lens-Flare-PNG.svg";
import Button from "../button/Button";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="container__left">
          <img src={whitestar} alt="white-star" className="white-star" />
          <div className="purple-lens">
            <img src={lens} alt="" />
          </div>
          <div className="text-box">
            <h1>
              getlinked Tech Hackathon <span className="version">1.0</span>
              <img src={bulb} alt="bulb" className="bulb" />
            </h1>
            <span className="chain">
              <img src={chain} alt="chain" />
            </span>
            <span className="spark">
              <img src={spark} alt="spark" />
            </span>

            <p className="text-primary">
              Participate in getlinked tech Hackathon 2023 stand
              <br /> a chance to win a Big prize
            </p>
          </div>

          <div className="container__btn">
            <Button text="Register" />
          </div>
          <img src={greystar} alt="grey-star" className="grey-star" />

          <div className="countdown">
            <p>
              00<span>H</span>
            </p>
            <p>
              00<span>M</span>
            </p>
            <p>
              00<span>S</span>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="container__right">
          <div className="text-box__right">
            <h2>Igniting a Revolution in HR Innovation</h2>
            <img src={vector} alt="vector-1" className="vector-1" />
          </div>
          <img src={guy} alt="hackathon Guy" className="guy" />

          <img src={guy} alt="hackathon Guy" className="guy guy--mobile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
