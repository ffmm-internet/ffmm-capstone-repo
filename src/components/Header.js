import Nav from "./Nav";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="Little Lemon Logo" />
    </Link>
    <Nav />
  </header>
);

export default Header;
