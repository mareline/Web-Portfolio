import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks} from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={'${styles.paddingX}} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}
    >
      <div className="w-full flex justify-between items-center max-w-7l mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >
            <img src={logo} alt="logo" className="w-10 h-10" />
            <p className="text-white text-[18px] font-bold cursor-pointer"> Mareline Ramirez </p>
        </Link>
        <ul className="list-none sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              /* Shows if the link is active or not while the mouse is hovered */
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar