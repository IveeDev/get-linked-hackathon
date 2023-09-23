import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Schema, number, set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import instagram from "../../assets/socials/mdi_instagram.svg";

import tweeter from "../../assets/socials/tweeter.svg";
import facebook from "../../assets/socials/facebook.svg";
import linkedin from "../../assets/socials/ri_linkedin-fill.svg";
import flareTop from "../../assets/images/flare-top.svg";
import flareBottom from "../../assets/images/flare-bottom.svg";
import satagra from "../../assets/images/sata-gra.svg";
import purplestar from "../../assets/images/intro-star.svg";
import whitestar from "../../assets/images/white-star.svg";
import greystar from "../../assets/images/grey-star.svg";
import Button from "../../components/button/Button";
import "./ContactPage.scss";
import newRequest from "../../services/auth-request";
import MessageDisplay from "../../components/message-diplay/MessageDisplay";

const ContactPage = () => {
  const schema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, { message: "Email is required" }),
    phone_number: z
      .string()
      .min(7, { message: "Phone number must be at least 7 character" }),
    first_name: z.string().min(3, { message: "First name is required" }),
    message: z.string().min(5, { message: "Message is required" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const clearErrorMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(clearErrorMessage, 5000); // Set a 5-second timeout
      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    }
  }, [message]);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    if (isValid) {
      setLoading(true);
      setMessage("");
      try {
        await newRequest.post("/hackathon/contact-form", { ...data });
        reset();
        setMessage("Message sent successfully!");
      } catch (err) {
        setMessage("An error occurred while sending message");
        console.log(err);
      } finally {
        reset();
        setLoading(false);
      }
    }
  };

  return (
    <section className="contact">
      <div className="container">
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
              27,Alara Street <br /> Yaba 100012
              <br /> Lagos State
            </p>
            <p className="container__paragraph">Call Us : 07067981819</p>

            <p className="container__paragraph">
              we are open from Monday-Friday
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

        <div className="container__right">
          <div className="contact__form-container">
            <h1>
              Questions or Need Assistance?
              <br />
              Let us know about it!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
              {message && <MessageDisplay message={message} />}
              <div className="form__group">
                <label htmlFor="firstName">First Name</label>
                <input
                  {...register("first_name")}
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                />
                {errors.first_name && (
                  <p className="text-danger">{errors.first_name.message}</p>
                )}
              </div>
              <div className="form__group">
                <label htmlFor="email">Email Address</label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="text-danger"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="form__group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  {...register("phone_number")}
                  type="tel"
                  id="phone_number"
                  placeholder="phone"
                  className="text-danger"
                />
                {errors.phone_number && <p>{errors.phone_number.message}</p>}
              </div>
              <div className="form__group">
                <label htmlFor="message">Message</label>
                <textarea
                  {...register("message")}
                  id="message"
                  name="message"
                  placeholder="Enter your message here"
                  className="text-danger"
                />
                {errors.message && <p>{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={loading} className="form__btn">
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
            <img src={flareBottom} alt="flare" className="flare-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

// box-shadow: 0px 4px 4px 0px #00000040;
