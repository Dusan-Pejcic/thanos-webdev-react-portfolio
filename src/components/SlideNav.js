import { Link } from "react-router-dom";
import { useState } from "react";

const SlideNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="slide-nav-container">
      <div
        className={
          menuOpen ? "slide-nav-list-container slide-nav-opened": "slide-nav-list-container"
        }
      >
        <ul className="slide-nav-ul" onClick={toggleMenu}>
          <i className="fas fa-times close"></i>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/">services</Link>
          </li>
          <li>
            <Link to="/">faq</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </div>
      <div className="menu-btn-container">
        <div
          className={menuOpen ? "menu-btn open" : "menu-btn"}
          onClick={toggleMenu}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </div>
    </div>
  );
};

export default SlideNav;
