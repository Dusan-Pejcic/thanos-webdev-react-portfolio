import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div class="container">
      <div class="widgets-container text_container">

        <div class="footer-nav widget">
          <ul class='footer-nav-ul'>
            <i class="fas fa-times close"></i>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><a href="#services">services</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div class="footer-contact-details widget">
          <p>Athanasios Atskakanis</p>
          <p>Nordhauser str 26</p>
          <p>10589 Berlin</p>
          <p>Umsatzsteuer-Identifikationsnummer <br /> gemäß §27a Umsatzsteuergesetz: DE327576735</p>
          <p>Telefon: +4915730107748</p> 
          <p>E-Mail: contact@builtbythanos.com</p>
        </div>

        <div class="footer-impressum widget">
          <p>Impressum</p>
          
        </div>

      </div>
      <div class="developed-by">
        <p>Developed by Dusan Pejcic, &copy; 2021</p>
      </div>
   </div>
        </footer>
     );
}
 
export default Footer;