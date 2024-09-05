import Hero from "./Hero";
import BookingForm from "./BookingForm";

import "./BookingPage.css";

const BookingPage = (props) => (
  <>
    <Hero />
    <BookingForm {...props} />
  </>
);

export default BookingPage;
