import { useQuery } from "@tanstack/react-query";
import newRequest from "../services/auth-request"; // Update the path to the newRequest module

const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        // Make the API request using the newRequest axios instance
        const response = await newRequest.get("/hackathon/categories-list");

        // Assuming your API returns data in response.data
        console.log(response);
        return response.data;
      } catch (error) {
        throw error; // Rethrow the error to be handled by react-query
      }
    },
  });

export default useCategories;
