import React from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";
import HeroSection from "../../components/hero-section/HeroSection";
import "./HomePage.scss";
import Introduction from "../../components/introduction/Introduction";
import GuideSection from "../../components/guide/GuideSection";
import CriteriaSection from "../../components/criteria/CriteriaSection";
import FaqSection from "../../components/faq-section/FaqSection";
import Timeline from "../../components/timeline/Timeline";
import Reward from "../../components/reward-section/Reward";
import Partnership from "../../components/partnership/Partnership";
import Policy from "../../components/policy-privacy/Policy";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction */}
      <Introduction />

      {/* Guide Section */}
      <GuideSection />

      {/* Criteria Section */}
      <CriteriaSection />

      {/* FAQ Section */}
      {/* <FaqSection /> */}
      <Element name="faq-section">
        <FaqSection />
      </Element>

      {/* Timeline Section */}
      <Timeline />

      {/* Reward Section */}
      <Reward />

      {/* Parnership Section */}
      <Partnership />

      {/* Policies and Privacy */}
      <Policy />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
