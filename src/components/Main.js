import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  </main>
);

export default Main;
