import React from "react";
import useCategories from "../hook/useCategory"; // Update the import statement

interface Category {
  id: number;
  name: string;
}

const CategorySelect = () => {
  const { data, error } = useCategories();
  console.log(data);
  return (
    <div className="form__group">
      <label htmlFor="groupSize">Select your category</label>
      <select id="category" name="category">
        <option value="">Select your category</option>
        {data?.map((category: Category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
