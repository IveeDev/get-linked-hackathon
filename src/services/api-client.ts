import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.getlinked.ai/",
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endPoint, config) // Change the type to T[]
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance
      .post<T>(this.endPoint, data) // Change the type to T
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id) // Change the type to T
      .then((res) => res.data);
  };
}

export default APIClient;
