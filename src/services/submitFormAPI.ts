// apiService.js
import { FieldValues } from "react-hook-form";
import newRequest from "./auth-request";

const submitFormAPI = async (data: FieldValues) => {
  try {
    const response = await newRequest.post("/hackathon/contact-form", {
      ...data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default submitFormAPI;
