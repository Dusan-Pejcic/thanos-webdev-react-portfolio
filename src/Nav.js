import { Link } from "react-router-dom"

const Nav = () => {
    return ( 
        <nav className="main-nav">
            <div className="nav-and-logo-container"> 
                <div className="logo-container">
                    <img className="logo-elipses" src="./img/logos/logo-elipses.png" alt=""/>
                    <p className="logo-text">Built by Thanos</p>
                    {/* <i className="fas fa-bars hamburger"></i> */}
                </div>
  
                <ul className='nav-ul menu'>
                    <i className="fas fa-times close"></i>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Nav;