import { useState } from "react";
import { FaWallet, FaCompass, FaBell, FaGear } from "react-icons/fa6";

function MobileNav() {
    const [activeMenu, setActiveMenu] = useState(0);
    const menuItems = [
      { icon: <FaWallet />, name: "Wallet" },
      { icon: <FaCompass />, name: "Explore" },
      { icon: <FaBell />, name: "Notifications" },
      { icon: <FaGear />, name: "Settings" },
    ];
    return (
      <nav>
        <ul className='menu-list flex'>
          {menuItems.map((item, index) => (
            <li key={index} className={index === activeMenu ? "active" : ""}>
              <a href='/' onClick={() => setActiveMenu(index)} className='fade'>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default MobileNav;
