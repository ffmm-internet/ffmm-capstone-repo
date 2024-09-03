import chefs1Image from "../images/chefs1.png";
import chefs2Image from "../images/chefs2.png";

import "./Chicago.css";

const Chicago = () => (
  <section className="chicago-section">
    <div className="chicago-section-left-column">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="chicago-section-body-text">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus elit nam
          dapibus ultricies semper. Porta urna nibh libero inceptos finibus
          quisque laoreet. Dis ante hac donec vitae class neque.
        </p>
      </div>
    </div>
    <div className="chicago-section-chef-left-column">
      <img
        className="chicago-section-left-image"
        src={chefs1Image}
        alt="Chefs View 1"
      />
    </div>
    <div className="chicago-section-chef-right-column">
      <img
        className="chicago-section-right-image"
        src={chefs2Image}
        alt="Chefs View 2"
      />
    </div>
  </section>
);

export default Chicago;
