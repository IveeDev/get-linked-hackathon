import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Category {
  id: number;
  name: string;
}

const apiClient = new APIClient<Category>("/categories-list");
const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: apiClient.getAll,
  });

export default useCategories;
