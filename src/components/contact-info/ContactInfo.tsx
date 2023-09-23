// ContactInfo.js
import React from "react";
import instagram from "../../assets/socials/mdi_instagram.svg";
import tweeter from "../../assets/socials/tweeter.svg";
import facebook from "../../assets/socials/facebook.svg";
import satagra from "../../assets/images/sata-gra.svg";
import flareTop from "../../assets/images/flare-top.svg";
import linkedin from "../../assets/socials/ri_linkedin-fill.svg";

const ContactInfo = () => {
  return (
    <div className="container__left">
      <img src={satagra} alt="star" className="star star--sata-gra" />
      <img src={flareTop} alt="star" className="flare-top" />

      <div className="contact__textbox">
        <h1 className="container__heading">Get in touch</h1>
        <p className="container__paragraph">
          Contact
          <br /> Information
        </p>
        <p className="container__paragraph">
          27, Alara Street <br /> Yaba 100012
          <br /> Lagos State
        </p>
        <p className="container__paragraph">Call Us : 07067981819</p>

        <p className="container__paragraph">
          We are open from Monday-Friday
          <br /> 08:00am - 05:00pm
        </p>
      </div>

      <div className="contact__social">
        <p>Share on</p>
        <div className="contact__social-icons">
          <img src={instagram} alt="instagram" />
          <img src={tweeter} alt="instagram" />
          <img src={facebook} alt="instagram" />
          <img src={linkedin} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
