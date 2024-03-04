import React from "react";

const SortCards = ({ setCategory, setOpenDropdown }) => {
  const filterTypes = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];

  const onFilterClick = (name) => {
    setCategory(name);
    setOpenDropdown(false);
  };

  return (
    <ul className="menu">
      {filterTypes.map((name, i) => (
        <li key={i} onClick={() => onFilterClick(name)} className="active">
          {name[0].toUpperCase() + name.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default SortCards;
