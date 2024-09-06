import Hero from "./Hero";
import BookingForm from "./BookingForm";
import BookingExistingReservations from "./BookingExistingReservations";

import "./BookingPage.css";

const BookingPage = (props) => (
  <>
    <Hero />
    <BookingForm {...props} />
    <BookingExistingReservations bookings={props.bookings} />
  </>
);

export default BookingPage;
