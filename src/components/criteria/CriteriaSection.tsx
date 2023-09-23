import criteria from "../../assets/images/judging-criteria-2.svg";

import criteriaMobile from "../../assets/images/mobile-criteria.svg";
import Button from "../button/Button";
import "./CriteriaSection.scss";

const CriteriaSection = () => {
  return (
    <section className="criteria">
      <div className="container">
        <div className="criteria__column container__left--mobile">
          <img
            src={criteriaMobile}
            alt="criteria"
            className="container__photo--mobile"
          />
        </div>
        <div className="criteria__column container__left">
          <img src={criteria} alt="criteria" className="container__photo" />
        </div>

        <div className="criteria__column container__right">
          <h1 className="container__heading">
            Judging Criteria
            <br />
            <span className="container__heading-purple">Key attributes</span>
          </h1>

          <div className="textbox">
            <p>
              Innovation and Creativity:{" "}
              <span>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </p>

            <p>
              Functionality:{" "}
              <span>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </p>

            <p>
              Impact and Relevance:{" "}
              <span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </p>

            <p>
              Technical Complexity:{" "}
              <span>
                Complexity: Evaluate the technical sophistication of the
                solution. Judges would consider the complexity of the code, the
                use of advanced technologies or algorithms, and the scalability
                of the solution.
              </span>
            </p>

            <p>
              Adherence to Hackathon Rules:{" "}
              <span>
                Rules: Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </p>
          </div>
          <div className="criteria__btn">
            <Button text="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
