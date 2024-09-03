import greekSaladImage from "../images/greek salad.jpg";
import deliveryIconImage from "../images/deliveryIcon.jpg";
import bruschettaImage from "../images/bruschetta.png";
import lemonDessertImage from "../images/lemon dessert.jpg";

import "./Specials.css";

const Specials = () => (
  <section className="specials-section">
    <div className="specials-section-heading">
      <h2>This Week's Specials</h2>
      <div>
        <button className="online-menu-button">Online Menu</button>
      </div>
    </div>
    <div className="specials-section-content">
      <div className="specials-section-content-first-column">
        <img className="dish-image" src={greekSaladImage} alt="Greek Salad" />
        <div className="dish-and-price">
          <h3 className="dish-title">Greek Salad</h3>
          <h3 className="dish-price">$12.99</h3>
        </div>
        <p className="dish-description">
          The famous Greek salad of crispy lettuce, peppers, olives, and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <div className="order-a-delivery">
          <h3>Order a Delivery</h3>
          <img
            className="delivery-icon"
            src={deliveryIconImage}
            alt="Delivery Icon"
          />
        </div>
      </div>
      <div className="specials-section-content-second-column">
        <img className="dish-image" src={bruschettaImage} alt="Bruschetta" />
        <div className="dish-and-price">
          <h3 className="dish-title">Bruschetta</h3>
          <h3 className="dish-price">$5.99</h3>
        </div>
        <p className="dish-description">
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </p>
        <div className="order-a-delivery">
          <h3>Order a Delivery</h3>
          <img
            className="delivery-icon"
            src={deliveryIconImage}
            alt="Delivery Icon"
          />
        </div>
      </div>
      <div className="specials-section-content-third-column">
        <img
          className="dish-image"
          src={lemonDessertImage}
          alt="Lemon Dessert"
        />
        <div className="dish-and-price">
          <h3 className="dish-title">Lemon Dessert</h3>
          <h3 className="dish-price">$5.00</h3>
        </div>
        <p className="dish-description">
          This comes straight from grandma's recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </p>
        <div className="order-a-delivery">
          <h3>Order a Delivery</h3>
          <img
            className="delivery-icon"
            src={deliveryIconImage}
            alt="Delivery Icon"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Specials;
