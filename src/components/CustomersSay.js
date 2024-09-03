import fiveStarsImage from "../images/fiveStars.png";
import carlImage from "../images/carl.png";
import stacyImage from "../images/stacy.png";
import thandiImage from "../images/thandi.png";
import mikeImage from "../images/mike.png";

import "./CustomersSay.css";

const CustomersSay = () => (
  <section className="customers-say-section">
    <div className="customers-say-section-heading">
      <h2>Testimonials</h2>
    </div>
    <div className="customers-say-section-content">
      <div className="customers-say-section-content-first-column">
        <img
          className="testimonials-rating-image"
          src={fiveStarsImage}
          alt="Five Stars"
        />
        <div className="avatar-and-name">
          <img className="avatar-image" src={carlImage} alt="Carl" />
          <h3 className="avatar-name">Carl</h3>
        </div>
        <p className="testimonials-text">
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </p>
      </div>
      <div className="customers-say-section-content-second-column">
        <img
          className="testimonials-rating-image"
          src={fiveStarsImage}
          alt="Five Stars"
        />
        <div className="avatar-and-name">
          <img className="avatar-image" src={stacyImage} alt="Stacy" />
          <h3 className="avatar-name">Stacy</h3>
        </div>
        <p className="testimonials-text">
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </p>
      </div>
      <div className="customers-say-section-content-third-column">
        <img
          className="testimonials-rating-image"
          src={fiveStarsImage}
          alt="Five Stars"
        />
        <div className="avatar-and-name">
          <img className="avatar-image" src={thandiImage} alt="Thandi" />
          <h3 className="avatar-name">Thandi</h3>
        </div>
        <p className="testimonials-text">
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </p>
      </div>
      <div className="customers-say-section-content-fourth-column">
        <img
          className="testimonials-rating-image"
          src={fiveStarsImage}
          alt="Five Stars"
        />
        <div className="avatar-and-name">
          <img className="avatar-image" src={mikeImage} alt="Mike" />
          <h3 className="avatar-name">Mike</h3>
        </div>
        <p className="testimonials-text">
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </p>
      </div>
    </div>
  </section>
);

export default CustomersSay;
