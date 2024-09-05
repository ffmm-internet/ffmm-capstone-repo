import { useReducer, useState } from "react";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const updateTimes = (state, action) => {
    const selectedDate = action.type;
    // todo ffm remove
    console.log("Dispatching " + selectedDate);
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

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
