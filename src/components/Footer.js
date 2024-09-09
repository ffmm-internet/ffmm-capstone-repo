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
            <Link to="/" aria-label="On Click">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="On Click">
              About
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="On Click">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/booking" aria-label="On Click">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="On Click">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="On Click">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-third-column">
        <h3 className="footer-heading">Contact</h3>
        <ul>
          <li>
            <Link to="#" aria-label="On Click">
              Address
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="On Click">
              Phone Number
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="On Click">
              Email
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-fourth-column">
        <h3 className="footer-heading">Social Media Links</h3>
        <ul>
          <li>
            <Link to="http://www.linkedin.com" aria-label="On Click">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link to="http://www.facebook.com" aria-label="On Click">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="http://www.x.com" aria-label="On Click">
              X
            </Link>
          </li>
          <li>
            <Link to="http://www.pinterest.com" aria-label="On Click">
              Pinterest
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
