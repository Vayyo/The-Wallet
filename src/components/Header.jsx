import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaEllipsisVertical } from "react-icons/fa6";
import MenuBar from "./MenuBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <FaAngleLeft className='icons' />
      <h2 className='pageTitle'>Bitcoin Wallet</h2>
      <FaEllipsisVertical className='icons' onClick={handleMenuToggle} />

      {isMenuOpen && <MenuBar innerRef={menuBarRef} />}
    </header>
  );
}

export default Header;
