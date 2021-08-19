import { Link } from "react-router-dom"
import { useState } from 'react';

const SlideNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const menuBttnClick = ()=> {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
   }
    return ( 
        <div className="slide-nav-container">
            <div className={ menuOpen ? "slide-nav-list-container" : "slide-nav-list-container slide-nav-opened "}>
                    <ul className='slide-nav-ul' onClick={ menuBttnClick }>
                        <i className="fas fa-times close"></i>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
            </div>
            <div className="menu-btn-container">
                <div className={menuOpen ? 'menu-btn' : 'menu-btn open'} onClick={menuBttnClick}>
                    <div className="menu-btn__burger"></div> 
                </div> 
            </div>
        </div>
     );
}
 
export default SlideNav;