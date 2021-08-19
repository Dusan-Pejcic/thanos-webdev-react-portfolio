import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="nav-ul menu">
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
  );
};

export default NavList;
