import Accordion from "../accordion/Accordion";
import faq from "../../assets/images/FAQ.svg";
import purplestar from "../../assets/images/intro-star.svg";
import greystar from "../../assets/images/grey-star.svg";
import satagra from "../../assets/images/sata-gra.svg";
import whitestar from "../../assets/images/white-star.svg";
import "./FaqSection.scss";

const FaqSection = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-section__column container__left">
          <img src={purplestar} alt="" className="purple-star" />
          <h1 className="container__heading">
            Frequently
            <br />
            <span className="container__heading-purple">Ask Question</span>
          </h1>
          <p className="container__paragraph">
            We got answers to the questions that you might
            <br /> want to ask about <strong>getlinked Hackathon 1.0</strong>
          </p>

          <div className="container__faq">
            <Accordion title="Can I work on a project I started before the hackathon?">
              <p>Content for Section 1 goes here.</p>
            </Accordion>

            <Accordion title="What happens if I need help during the hackathon?">
              <p>Content for Section 2 goes here.</p>
            </Accordion>

            <Accordion title="What happens if I don't have an idea for a project?">
              <p>Content for Section 2 goes here.</p>
            </Accordion>
            <img src={greystar} alt="star" className="star grey-star" />

            <Accordion title="Can I join a team or do I have to come with one?">
              <p>Content for Section 2 goes here.</p>
            </Accordion>

            <Accordion title="What happens after the hackathon ends">
              <p>Content for Section 2 goes here.</p>
            </Accordion>

            <Accordion title="Can I work on a project I started before the hackathon?">
              <p>Content for Section 2 goes here.</p>
            </Accordion>
          </div>
        </div>

        <div className="faq-section__column container__right">
          <img src={satagra} alt="" className="star sata-gra" />
          <img src={satagra} alt="" className="star sata-gra--1" />
          <img src={faq} alt="faq" className="faq-img" />

          <img src={whitestar} alt="" className="star white-star" />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
