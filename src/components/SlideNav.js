import { Link } from "react-router-dom";

const SlideNav = (props) => {


  return (
    <div className="slide-nav-container">
      <div
        className={
          props.isOpen ? "slide-nav-list-container slide-nav-opened": "slide-nav-list-container"
        }
      >
        <ul className="slide-nav-ul" onClick={props.toggler}>
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
    </div>
  );
};

export default SlideNav;
