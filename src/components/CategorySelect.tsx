// import React from "react";
// import useCategories from "../hook/useCategory"; // Update the import statement
// import { RegisterOptions } from "react-hook-form";

// interface Category {
//   id: number;
//   name: string;
// }

// interface Props {
//   register: (name: string, options?: RegisterOptions) => void;
// }

// const CategorySelect = ({ register }: Props) => {
//   const { data, error } = useCategories();
//   console.log(data);
//   return (
//     <div className="form__group">
//       <label htmlFor="groupSize">Select your category</label>
//       <select id="category" name="category" {...register("category")}>
//         <option value="">Select your category</option>
//         {data?.map((category: Category) => (
//           <option key={category.id} value={category.name}>
//             {category.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CategorySelect;
