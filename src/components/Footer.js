import footerImage from "../images/restauranfood.jpg";

function Footer() {
  return (
    <footer>
      <img src={footerImage} alt="footer image" />
      <h2>Browse</h2>
      <ul>
        <li>
          <a href="#">Home</a>
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
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="#">Address</a>
        </li>
        <li>
          <a href="#">Phone Number</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
      <h2>Social Media Links</h2>
      <ul>
        <li>
          <a href="#">LinkedIn</a>
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
    </footer>
  );
}

export default Footer;
