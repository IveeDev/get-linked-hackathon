import partnership from "../../assets/images/partneship.png";
import "./Partnership.scss";

const Partnership = () => {
  return (
    <section className="partnership">
      <div className="container">
        <h1 className="container__heading">Partners and Sponsors</h1>
        <p className="container__paragraph">
          Getlinked Hackathon 1.0 is honored to have the following major
          <br />
          companies as its partners and sponsors
        </p>

        <div className="container__photo">
          <img
            src={partnership}
            alt="partnership"
            className="partnership__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Partnership;
