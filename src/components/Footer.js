import footerImage from "../images/restaurantfood.jpg";

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
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-third-column">
        <h3 className="footer-heading">Contact</h3>
        <ul>
          <li>
            <a href="index.html">Address</a>
          </li>
          <li>
            <a href="#">Phone Number</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </div>
      <div className="footer-fourth-column">
        <h3 className="footer-heading">Social Media Links</h3>
        <ul>
          <li>
            <a href="index.html">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">X</a>
          </li>
          <li>
            <a href="#">Pinterest</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
