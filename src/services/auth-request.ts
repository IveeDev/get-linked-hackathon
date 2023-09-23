import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://backend.getlinked.ai/",
  withCredentials: false,
});

export default newRequest;
