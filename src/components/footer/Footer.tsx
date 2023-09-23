import { Link } from "react-router-dom";
import logo from "../../assets/images/getlinked.svg";
import instagram from "../../assets/socials/mdi_instagram.svg";
import tweeter from "../../assets/socials/tweeter.svg";
import facebook from "../../assets/socials/facebook.svg";
import linkedin from "../../assets/socials/ri_linkedin-fill.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container__column container__column--1">
          <img src={logo} className="nav__logo" alt="getlinked" />
          <p className="footer__paragraph">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="footer__terms">
            <p>Terms of Use</p>
            <div className="divider"></div>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="container__column container__column--2">
          <h5 className="footer__heading">Useful Links</h5>
          <ul className="list-link">
            <li>
              <Link to="/">Overview</Link>
            </li>

            <li>
              <Link to="/">Timeline</Link>
            </li>

            <li>
              <Link to="/">FAQs</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <ul className="list-socials">
            <h6 className="footer__heading--small">Follow us</h6>
            <li>
              <Link to="/">
                <img src={instagram} alt="instagram" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <img src={tweeter} alt="tweeter" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <img src={facebook} alt="facebook" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <img src={linkedin} alt="linkedin" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="container__column container__column--3">
          <h5 className="footer__heading">Contact us</h5>
          <div>
            <img src="" alt="" />
            <span>+234 679 81819</span>
          </div>

          <div>
            <img src="" alt="" />
            <p>
              27, Alara Street
              <br />
              Yaba 10012
              <br /> Lagos State
            </p>
          </div>
        </div>
      </div>
      <small className="small">All rights reserved. © getlinked Ltd.</small>
    </footer>
  );
};

export default Footer;
