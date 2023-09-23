import { FormEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Schema, number, set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import registerIcon from "../../assets/images/designer.png";
import walking from "../../assets/images/persons.svg";
import flareTop from "../../assets/images/flare-top.svg";
import flareBottom from "../../assets/images/flare-bottom.svg";
import "./RegisterPage.scss";
import useCategories from "../../hook/useCategory";
import newRequest from "../../services/auth-request";

interface Category {
  id: number;
  name: string;
}

const RegisterPage = () => {
  // Category data
  const { data, error } = useCategories();

  const schema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, { message: "Email is required" }),
    phone_number: z
      .string()
      .min(7, { message: "Phone number must be at least 7 character" }),
    team_name: z.string().min(3, { message: "Team name is required" }),
    group_size: z.string(),
    project_topic: z.string().min(3, { message: "Topic is required" }),
    category: z.string(),
    privacy_policy: z.boolean().refine((value) => value === true, {
      message: "Privacy policy must be accepted",
    }),
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

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    const categoryId = parseInt(data.category);
    const groupSize = parseInt(data.group__size);

    try {
      const requestData = {
        ...data, // Include all other form fields
        category: categoryId,
        group_size: groupSize,
      };
      const res = await newRequest.post("/hackathon/registration", requestData);

      console.log(res);
    } catch (err) {
      console.error("Error:", error);
    }
  };

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

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="teamName">Team Name:</label>
                  <input
                    {...register("team_name")}
                    type="text"
                    id="team_name"
                    name="team_name"
                    placeholder="Enter the name of your group"
                  />
                  {errors.team_name && (
                    <p className="text-danger">{errors.team_name.message}</p>
                  )}
                </div>
                <div className="form__group">
                  <label htmlFor="teamName">Phone</label>
                  <input
                    {...register("phone_number")}
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone_number && (
                    <p className="text-danger">{errors.phone_number.message}</p>
                  )}
                </div>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
                <div className="form__group">
                  <label htmlFor="project topic">Project Topic</label>
                  <input
                    {...register("project_topic")}
                    type="text"
                    id="project_topic"
                    name="project_topic"
                    placeholder="Enter your project topic"
                  />
                </div>
              </div>

              {/* Select Input */}

              <div className="form__row">
                {/* <CategorySelect /> */}

                <div className="form__group">
                  <label htmlFor="groupSize">Select your category</label>
                  <select id="category" {...register("category")}>
                    <option value="">Select your category</option>
                    {data?.map((category: Category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-danger">{errors.category.message}</p>
                  )}
                </div>

                <div className="form__group">
                  <label htmlFor="groupSize">Group Size</label>
                  <select id="group_size" {...register("group_size")}>
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  {errors.group_size && (
                    <p className="text-danger">{errors.group_size.message}</p>
                  )}
                </div>
              </div>

              <p className="warning">
                Please review your registrations details before submitting
              </p>
              <div className="form__row">
                <div className="input-check">
                  <input
                    {...register("privacy_policy")}
                    id="privacy_policy"
                    type="checkbox"
                    name="privacy_policy"
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
