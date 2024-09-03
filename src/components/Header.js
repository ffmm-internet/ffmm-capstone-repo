import Nav from "./Nav";
import logo from "../images/Logo.svg";

const Header = () => (
  <header>
    <img src={logo} alt="Little Lemon Logo" />
    <Nav />
  </header>
);

export default Header;
