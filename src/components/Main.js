import restaurantFoodImage from "../images/restaurantfood.jpg";
import greekSaladImage from "../images/greek salad.jpg";
import deliveryIconImage from "../images/deliveryIcon.jpg";
import bruschettaImage from "../images/bruschetta.png";
import lemonDessertImage from "../images/lemon dessert.jpg";
import fiveStarsImage from "../images/fiveStars.png";
import carlImage from "../images/carl.png";
import stacyImage from "../images/stacy.png";
import thandiImage from "../images/thandi.png";
import mikeImage from "../images/mike.png";
import chefs1Image from "../images/chefs1.png";
import chefs2Image from "../images/chefs2.png";

const Main = () => (
  <main>
    <section className="hero-section">
      <div className="hero-section-left-column">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="hero-section-body-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <button className="reserve-table-button">Reserve a Table</button>
        </div>
      </div>
      <div className="hero-section-right-column">
        <img src={restaurantFoodImage} alt="Restaurant food" />
      </div>
    </section>
    <section className="highlights-section">
      <div className="highlights-section-heading">
        <h2>This Week's Specials</h2>
        <div>
          <button className="online-menu-button">Online Menu</button>
        </div>
      </div>
      <div className="highlights-section-content">
        <div className="highlights-section-content-first-column">
          <img className="dish-image" src={greekSaladImage} alt="Greek Salad" />
          <div className="dish-and-price">
            <h3 className="dish-title">Greek Salad</h3>
            <h3 className="dish-price">$12.99</h3>
          </div>
          <p className="dish-description">
            The famous Greek salad of crispy lettuce, peppers, olives, and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
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
        <div className="highlights-section-content-second-column">
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
        <div className="highlights-section-content-third-column">
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
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
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
    <section className="testimonials-section">
      <div className="testimonials-section-heading">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-section-content">
        <div className="testimonials-section-content-first-column">
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
        <div className="testimonials-section-content-second-column">
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
        <div className="testimonials-section-content-third-column">
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
        <div className="testimonials-section-content-fourth-column">
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
    <section className="about-section">
      <div className="about-section-left-column">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="about-section-body-text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus elit nam
            dapibus ultricies semper. Porta urna nibh libero inceptos finibus
            quisque laoreet. Dis ante hac donec vitae class neque.
          </p>
        </div>
      </div>
      <div className="about-section-chef-left-column">
        <img
          className="about-section-left-image"
          src={chefs1Image}
          alt="Chefs View 1"
        />
      </div>
      <div className="about-section-chef-right-column">
        <img
          className="about-section-right-image"
          src={chefs2Image}
          alt="Chefs View 2"
        />
      </div>
    </section>
  </main>
);

export default Main;
