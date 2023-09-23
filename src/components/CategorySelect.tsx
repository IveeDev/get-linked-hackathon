import React from "react";
import useCategories from "../hook/useCategory";

const CategorySelect = () => {
  const { data, error } = useCategories();
  return (
    <div className="form__group">
      <label htmlFor="groupSize">Select you category</label>
      <select id="category" name="category">
        <option value="">Select your category</option>
        {data?.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
