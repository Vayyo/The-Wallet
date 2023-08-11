import React, { useState } from "react";

function SortTab({ setActiveTimeframe }) {
  const [activeSort, setActiveSort] = useState("Week");
  const sortByItems = ["Day", "Week", "Month", "Year"];

  const handleSortClick = (item) => {
    setActiveSort(item);
    setActiveTimeframe(item);
  };

  return (
    <ul className='sort-list flex'>
      {sortByItems.map((item, index) => (
        <li
          key={index}
          className={`fade ${item === activeSort ? "active" : ""}`}
          onClick={() => handleSortClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SortTab;
