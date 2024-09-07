import { useReducer, useState } from "react";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import { updateTimes, initializeTimes, submitAPI } from "./reducerMethods";
import { getTodayString } from "./BookingForm";

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    getTodayString(),
    initializeTimes
  );

  const navigateToConfirmationPage = useNavigate();

  const bookingsFromStorage = localStorage.getItem("bookings");
  const bookingsData = bookingsFromStorage
    ? JSON.parse(bookingsFromStorage).sort((a, b) => {
        const bookingDateA = new Date(a.bookingDate);
        const bookingDateB = new Date(b.bookingDate);
        return bookingDateA - bookingDateB;
      })
    : [];

  const [bookings, updateAllBookings] = useState(bookingsData);

  const submitForm = (newBooking) => {
    if (submitAPI(newBooking)) {
      const bookingsFromStorage = localStorage.getItem("bookings");
      if (bookingsFromStorage) {
        const oldBookings = JSON.parse(bookingsFromStorage);
        const newBookings = [...oldBookings, newBooking];
        localStorage.setItem("bookings", JSON.stringify(newBookings));
      } else {
        localStorage.setItem("bookings", JSON.stringify([newBooking]));
      }

      updateAllBookings(
        JSON.parse(localStorage.getItem("bookings")).sort((a, b) => {
          const bookingDateA = new Date(a.bookingDate);
          const bookingDateB = new Date(b.bookingDate);
          return bookingDateA - bookingDateB;
        })
      );
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              bookings={bookings}
              navigateToConfirmationPage={navigateToConfirmationPage}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
