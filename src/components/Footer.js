import footerImage from "../images/restaurantfood.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-first-column">
        <img className="footer-image" src={footerImage} alt="Restaurant food" />
      </div>
      <div className="footer-second-column">
        <h3 className="footer-heading">Browse</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="#">Order Online</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
        </ul>
      </div>
      <div className="footer-third-column">
        <h3 className="footer-heading">Contact</h3>
        <ul>
          <li>
            <Link to="#">Address</Link>
          </li>
          <li>
            <Link to="#">Phone Number</Link>
          </li>
          <li>
            <Link to="#">Email</Link>
          </li>
        </ul>
      </div>
      <div className="footer-fourth-column">
        <h3 className="footer-heading">Social Media Links</h3>
        <ul>
          <li>
            <Link to="http://www.linkedin.com">LinkedIn</Link>
          </li>
          <li>
            <Link to="http://www.facebook.com">Facebook</Link>
          </li>
          <li>
            <Link to="http://www.x.com">X</Link>
          </li>
          <li>
            <Link to="http://www.pinterest.com">Pinterest</Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
