import "./ConfirmedBooking.css";

import Hero from "./Hero";

const ConfirmedBooking = () => {
  return (
    <>
      <Hero />
      <section className="confirmed-booking-section">
        <div className="confirmed-booking-section-heading">
          <h2>Thanks! Your booking has been confirmed!</h2>
        </div>
      </section>
    </>
  );
};

export default ConfirmedBooking;
