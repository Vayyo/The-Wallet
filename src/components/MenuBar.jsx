import React, { useState } from "react";
import {
  FaPenToSquare,
  FaBoxArchive,
  FaArrowUpRightFromSquare,
  FaCircleMinus,
} from "react-icons/fa6";

export default function MenuBar({ innerRef }) {
  const [activeItem, setActiveItem] = useState("");
  const menuBarItems = [
    { name: "Edit", icon: <FaPenToSquare /> },
    { name: "Courier Info", icon: <FaBoxArchive /> },
    { name: "Share", icon: <FaArrowUpRightFromSquare /> },
    { name: "Remove", icon: <FaCircleMinus /> },
  ];

  return (
    <div className='menu-bar' ref={innerRef}>
      <ul className='flex'>
        {menuBarItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </ul>
    </div>
  );
}

function MenuItem({ item, activeItem, setActiveItem }) {
  return (
    <li className={item.name === activeItem ? "active" : ""}>
      <a href='/' className='flex' onClick={() => setActiveItem(item.name)}>
        {item.name} {item.icon}
      </a>
    </li>
  );
}


