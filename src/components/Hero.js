import restaurantImage from "../images/restaurant.jpg";

import "./Hero.css";

const Hero = () => (
  <section className="hero-section">
    <img src={restaurantImage} alt="Restaurant" />
  </section>
);

export default Hero;
