// ContactForm.js
import React from "react";
import flareBottom from "../../assets/images/flare-bottom.svg";

interface Props {
  onSubmit: (data: any) => void; // Adjust the type of data as per your actual form data type
  loading: boolean;
  errorMessage: string | null;
}

const ContactForm = ({ onSubmit, loading, errorMessage }: Props) => {
  return (
    <div className="container__right">
      <div className="contact__form-container">
        <h1>
          Questions or Need Assistance?
          <br />
          Let us know about it!
        </h1>
        <form onSubmit={onSubmit} className="contact__form">
          {errorMessage && (
            <p className="text-danger auth-err">{errorMessage}</p>
          )}
          <div className="form__group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
            />
            {/* You can add validation error messages here */}
          </div>
          <div className="form__group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            {/* You can add validation error messages here */}
          </div>
          <div className="form__group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phone_number" placeholder="Phone Number" />
            {/* You can add validation error messages here */}
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
            />
            {/* You can add validation error messages here */}
          </div>
          <button type="submit" disabled={loading} className="form__btn">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <img src={flareBottom} alt="flare" className="flare-bottom" />
      </div>
    </div>
  );
};

export default ContactForm;
