import registerIcon from "../../assets/images/designer.png";
import walking from "../../assets/images/persons.svg";
import flareTop from "../../assets/images/flare-top.svg";
import flareBottom from "../../assets/images/flare-bottom.svg";
import "./RegisterPage.scss";
import CategorySelect from "../../components/CategorySelect";

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="container__left">
          <img src={flareTop} alt="flaretop" className="flare-top" />
          <img src={registerIcon} alt="register" className="register-icon" />
        </div>

        <div className="container__right">
          <div className="register__form-container">
            <h1 className="heading-primary">Register</h1>
            <p>Be part of the movement</p>
            <span>
              <img src={walking} alt="persons" />
            </span>

            <h2 className="heading-secondary">Create Your Account</h2>

            <form className="form">
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="teamName">Team Name:</label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="teamName">Phone</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="emal">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="project">Project Topic</label>
                  <input
                    type="text"
                    id="project_topic"
                    name="project_topic"
                    placeholder="Enter your project topic"
                  />
                </div>
              </div>

              {/* Select Input */}

              <div className="form__row">
                {/* <div className="form__group">
                  <label htmlFor="groupSize">Select you category</label>
                  <select id="groupSize" name="groupSize">
                    <option value="">Select your category</option>
                    <option value="Small">Mobile</option>
                    <option value="Medium">Web</option>
                    <option value="Large">UI/UX</option>
                  </select>
                </div> */}
                <CategorySelect />

                <div className="form__group">
                  <label htmlFor="groupSize">Group Size</label>
                  <select id="groupSize" name="groupSize">
                    <option value="">Select</option>
                    <option value="Small">1</option>
                    <option value="Medium">2</option>
                    <option value="Large">3</option>
                  </select>
                </div>
              </div>

              <p className="warning">
                Please review your registrations details before submitting
              </p>
              <div className="form__row">
                <div className="input-check">
                  <input
                    type="checkbox"
                    name="agreedTerms"
                    className="input-checkbox"
                  />
                  <label className="label-check">
                    I agreed with the event terms and Conditions andprivacy
                    policy
                  </label>
                </div>
              </div>

              <div className="form__row form__row--3">
                <button type="submit" className="form__btn">
                  Register
                </button>
              </div>
            </form>
          </div>
          <img src={flareBottom} alt="flare" className="flare-bottom" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
