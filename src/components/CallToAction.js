import restaurantFoodImage from "../images/restaurantfood.jpg";
import "./CallToAction.css";

const CallToAction = () => (
  <section className="call-to-action-section">
    <div className="call-to-action-section-left-column">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="call-to-action-section-body-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div>
        <button className="reserve-table-button">Reserve a Table</button>
      </div>
    </div>
    <div className="call-to-action-section-right-column">
      <img src={restaurantFoodImage} alt="Restaurant food" />
    </div>
  </section>
);

export default CallToAction;
