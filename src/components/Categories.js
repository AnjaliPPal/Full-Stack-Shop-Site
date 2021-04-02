import React from "react";
import "./Categories.css";

const categories = [
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",

  
];

function Categories() {
  const setActive = (e) => {
    let prevActive = document.querySelector(".categories__category.active");
    if (prevActive) prevActive.classList.remove("active");
    e.preventDefault();
    e.target.classList.add("active");
  };

  return (
    <div className="categories">
      <span
        className="categories__category active"
        onClick={(e) => setActive(e)}
      >
        All Departments
      </span>
      {categories.map((category) => (
        <span className="categories__category" onClick={(e) => setActive(e)}>
          {category}
        </span>
      ))}
    </div>
  );
}
export default Categories;
