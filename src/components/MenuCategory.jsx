import { useState } from "react";
import { useCategories } from "../context/api";

const MenuCategory = ({ onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { data: categoryList } = useCategories();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCategoryChange = (categoryId) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((cat) => cat !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="mx-auto flex flex-col items-center md:pr-9">
      {/* Dropdown Button */}
      <div
        className="md:pl-5 md:w-52 w-72 mt-3 bg-[#292929]  py-2 rounded border-[#504f4f] "
        onClick={toggleDropdown}
      >
        <button className="px-2 flex justify-between w-full text-left">
          Categories
          <span> {isOpen ? "▲" : "▼"}</span>
        </button>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <ul className="py-2 bg-[#292929] border-[#504f4f] rounded mt-2 md:w-52 w-72">
          {categoryList?.map((category) => (
            <div key={category.id} className="flex items-center px-4 py-1">
              <input
                id={category?.name}
                name={category?.name}
                type="checkbox"
                className="form-check-input mr-3"
                checked={selectedCategories.includes(category.id.toString())}
                onChange={() => handleCategoryChange(category.id.toString())}
              />
              <label htmlFor={category.name}>{category.name}</label>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuCategory;
