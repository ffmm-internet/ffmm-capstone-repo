import { useReducer, useState } from "react";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import { updateTimes, initializeTimes } from "./reducerMethods";

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    new Date(),
    initializeTimes
  );

  const bookingsFromStorage = localStorage.getItem("bookings");
  const bookingsData = bookingsFromStorage
    ? JSON.parse(bookingsFromStorage)
    : [];

  const [bookings, updateAllBookings] = useState(bookingsData);

  const onAdd = (newBooking) => {
    const bookingsFromStorage = localStorage.getItem("bookings");
    if (bookingsFromStorage) {
      const oldBookings = JSON.parse(bookingsFromStorage);
      const newBookings = [...oldBookings, newBooking];
      localStorage.setItem("bookings", JSON.stringify(newBookings));
    } else {
      localStorage.setItem("bookings", JSON.stringify([newBooking]));
    }

    updateAllBookings(JSON.parse(localStorage.getItem("bookings")));
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
              onAdd={onAdd}
              bookings={bookings}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
