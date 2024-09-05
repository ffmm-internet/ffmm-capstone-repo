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

  const [bookings, updateAllBookings] = useState([]);

  const onAdd = (newBooking) => {
    updateAllBookings([...bookings, newBooking]);
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
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
