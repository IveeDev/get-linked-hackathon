import "./Policy.scss";
import listTerms from "../../assets/images/list-terms.svg";
import privacy from "../../assets/images/privacy_policy.png";
import Button from "../button/Button";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <div className="container__left">
          <h1 className="container__heading">
            Privacy Policy and
            <br /> <span className="container__heading-purple">Terms</span>
          </h1>
          <p className="container__paragraph">
            Last updated on September 12, 2023
          </p>

          <p className="container__paragraph">
            Below are our privacy & policy, which outline a lot of goodies.
            <br /> it’s our aim to always take of our participant
          </p>

          <div className="container__licensing">
            <p className="container__paragraph container__paragraph--license">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h3 className="licesing__header">Licensing Policy</h3>
            <p className="container__paragraph container__paragraph--license">
              Here are some licensing policy:
            </p>

            <ul className="list">
              <div className="list__bar">
                <img src={listTerms} alt="list-terms" />
                <li className="list__item">
                  The Standard License grants you a non-exclusive right to
                  <br />
                  navigate and register for our event
                </li>
              </div>
              <div className="list__bar">
                <img src={listTerms} alt="list_terms" />
                <li className="list__item">
                  You are licensed to use the item available at any free source
                  <br />
                  sites, for your project developement
                </li>
              </div>
            </ul>

            <div className="policy__btn">
              <Button text="Read More" />
            </div>
          </div>
        </div>
        <div className="container__right">
          <img src={privacy} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Policy;
