import prizes from "../../assets/images/cup.png";
import trophy from "../../assets/images/trophy-mobile.svg";

import medals from "../../assets/images/medal-mobile.svg";
import gifts from "../../assets/images/gifts.png";
import "./Reward.scss";

const Reward = () => {
  return (
    <section className="reward">
      <div className="container">
        <div className="textbox">
          <h1 className="container__heading">
            Prizes and
            <br />
            <span className="container__heading-purple"> Rewards</span>
          </h1>
          <p className="container__paragraph">
            Highlight of the prizes or rewards for winners and
            <br /> for particpants
          </p>
        </div>

        <div className="row">
          <div className="container__left">
            <img
              src={prizes}
              alt="prices"
              className="container__photo--desktop"
            />

            <img
              src={trophy}
              alt="prices"
              className="container__photo--mobile"
            />
          </div>
          <div className="container__right">
            <img
              src={gifts}
              alt="prices"
              className="container__photo--desktop"
            />

            <img
              src={medals}
              alt="prices"
              className="container__photo--mobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reward;
