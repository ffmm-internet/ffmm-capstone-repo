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

function Main() {
  return (
    <main>
      <section class="hero-section">
        <div class="hero-section-left-column">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p class="hero-section-body-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <div>
            <button class="reserve-table-button">Reserve a Table</button>
          </div>
        </div>
        <div class="hero-section-right-column">
          <img src={restaurantFoodImage} alt="Restaurant food" />
        </div>
      </section>
      <section class="highlights-section">
        <div class="highlights-section-heading">
          <h2>This Week's Specials</h2>
          <div>
            <button class="online-menu-button">Online Menu</button>
          </div>
        </div>
        <div class="highlights-section-content">
          <div class="highlights-section-content-first-column">
            <img class="dish-image" src={greekSaladImage} alt="Greek Salad" />
            <div class="dish-and-price">
              <h3 class="dish-title">Greek Salad</h3>
              <h3 class="dish-price">$12.99</h3>
            </div>
            <p class="dish-description">
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div class="order-a-delivery">
              <h3>Order a Delivery</h3>
              <img
                class="delivery-icon"
                src={deliveryIconImage}
                alt="Delivery Icon"
              />
            </div>
          </div>
          <div class="highlights-section-content-second-column">
            <img class="dish-image" src={bruschettaImage} alt="Bruschetta" />
            <div class="dish-and-price">
              <h3 class="dish-title">Bruschetta</h3>
              <h3 class="dish-price">$5.99</h3>
            </div>
            <p class="dish-description">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <div class="order-a-delivery">
              <h3>Order a Delivery</h3>
              <img
                class="delivery-icon"
                src={deliveryIconImage}
                alt="Delivery Icon"
              />
            </div>
          </div>
          <div class="highlights-section-content-third-column">
            <img
              class="dish-image"
              src={lemonDessertImage}
              alt="Lemon Dessert"
            />
            <div class="dish-and-price">
              <h3 class="dish-title">Lemon Dessert</h3>
              <h3 class="dish-price">$5.00</h3>
            </div>
            <p class="dish-description">
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <div class="order-a-delivery">
              <h3>Order a Delivery</h3>
              <img
                class="delivery-icon"
                src={deliveryIconImage}
                alt="Delivery Icon"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="testimonials-section">
        <div class="testimonials-section-heading">
          <h2>Testimonials</h2>
        </div>
        <div class="testimonials-section-content">
          <div class="testimonials-section-content-first-column">
            <img
              class="testimonials-rating-image"
              src={fiveStarsImage}
              alt="Five Stars"
            />
            <div class="avatar-and-name">
              <img class="avatar-image" src={carlImage} alt="Carl" />
              <h3 class="avatar-name">Carl</h3>
            </div>
            <p class="testimonials-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div class="testimonials-section-content-second-column">
            <img
              class="testimonials-rating-image"
              src={fiveStarsImage}
              alt="Five Stars"
            />
            <div class="avatar-and-name">
              <img class="avatar-image" src={stacyImage} alt="Stacy" />
              <h3 class="avatar-name">Stacy</h3>
            </div>
            <p class="testimonials-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div class="testimonials-section-content-third-column">
            <img
              class="testimonials-rating-image"
              src={fiveStarsImage}
              alt="Five Stars"
            />
            <div class="avatar-and-name">
              <img class="avatar-image" src={thandiImage} alt="Thandi" />
              <h3 class="avatar-name">Thandi</h3>
            </div>
            <p class="testimonials-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div class="testimonials-section-content-fourth-column">
            <img
              class="testimonials-rating-image"
              src={fiveStarsImage}
              alt="Five Stars"
            />
            <div class="avatar-and-name">
              <img class="avatar-image" src={mikeImage} alt="Mike" />
              <h3 class="avatar-name">Mike</h3>
            </div>
            <p class="testimonials-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </section>
      <section class="about-section">
        <div class="about-section-left-column">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p class="about-section-body-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus elit
              nam dapibus ultricies semper. Porta urna nibh libero inceptos
              finibus quisque laoreet. Dis ante hac donec vitae class neque.
            </p>
          </div>
        </div>
        <div class="about-section-chef-left-column">
          <img
            class="about-section-left-image"
            src={chefs1Image}
            alt="Chefs View 1"
          />
        </div>
        <div class="about-section-chef-right-column">
          <img
            class="about-section-right-image"
            src={chefs2Image}
            alt="Chefs View 2"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
