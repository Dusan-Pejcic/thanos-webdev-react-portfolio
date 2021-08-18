import { Link } from "react-router-dom";

const NavList = () => {
    return ( 
        <ul className='nav-ul menu'>
            <i className="fas fa-times close"></i>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><a href="#">services</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">contact</a></li>
        </ul>
     );
}
 
export default NavList;