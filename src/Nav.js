
import logoElipses from './img/logos/logo-elipses.png';
import NavList from './components/NavList';

const Nav = () => {
    return ( 
        <nav className="main-nav">
            <div className="nav-and-logo-container"> 
                <div className="logo-container">
                    <img className="logo-elipses" src={logoElipses} alt=""/>
                    <p className="logo-text">Built by Thanos</p>
                </div>
                <NavList />
                
            </div>
        </nav>
     );
}
 
export default Nav;