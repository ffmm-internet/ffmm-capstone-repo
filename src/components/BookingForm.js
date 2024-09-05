import "./BookingForm.css";
import { useState } from "react";
import BookingSlot from "./BookingSlot";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const BookingForm = (props) => {
  const [bookingDate, setBookingDate] = useState(getTodayString());
  const [bookingTime, setBookingTime] = useState("");
  const [bookingNumberOfGuests, setBookingNumberOfGuests] = useState("1");
  const [bookingOccasion, setBookingOccasion] = useState("Other");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Booking reserved!" +
        bookingDate +
        " " +
        bookingTime +
        " " +
        bookingNumberOfGuests +
        " " +
        bookingOccasion
    ); // todo ffm remove
    props.onAdd({
      bookingDate,
      bookingTime,
      bookingNumberOfGuests,
      bookingOccasion,
    });
    clearForm();
  };

  const clearForm = () => {
    setBookingDate(getTodayString());
    setBookingTime("");
    setBookingNumberOfGuests("1");
    setBookingOccasion("Other");
  };

  return (
    <section className="booking-form-section">
      <div className="booking-form-section-heading">
        <h2>Booking Details</h2>
        <div>
          <h3>
            <span className="asterisk">*</span>
            <span className="required-field-text">Required Field</span>
          </h3>
        </div>
      </div>
      <div className="booking-form-section-content">
        <form onSubmit={handleSubmit}>
          <table width="100%">
            <colgroup>
              <col width="50%" />
              <col width="50%" />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <label
                    htmlFor="booking-date"
                    className="field-label booking-date-label"
                  >
                    <span className="asterisk">*</span>
                    Choose Date:
                  </label>
                </td>
                <td>
                  <input
                    type="date"
                    id="booking-date"
                    className="booking-date-value"
                    value={bookingDate}
                    onChange={(e) => {
                      setBookingDate(e.target.value);
                      props.dispatch({ type: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    htmlFor="booking-time"
                    className="field-label booking-time-label"
                  >
                    <span className="asterisk">*</span>
                    Choose Time:
                  </label>
                </td>
                <td>
                  <select
                    id="booking-time"
                    className="booking-time-value"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                  >
                    {!!props.availableTimes &&
                      props.availableTimes.map((time) => (
                        <BookingSlot key={time} time={time} />
                      ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    htmlFor="booking-number-of-guests"
                    className="field-label booking-number-of-guests-label"
                  >
                    <span className="asterisk">*</span>
                    Number of guests:
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    id="booking-number-of-guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    className="booking-number-of-guests-value"
                    value={bookingNumberOfGuests}
                    onChange={(e) => setBookingNumberOfGuests(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    htmlFor="booking-occasion"
                    className="field-label booking-occasion-label"
                  >
                    Occasion:
                  </label>
                </td>
                <td>
                  <select
                    id="booking-occasion"
                    className="booking-occasion-value"
                    value={bookingOccasion}
                    onChange={(e) => setBookingOccasion(e.target.value)}
                  >
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="reserve-now-button" type="submit">
                    Reserve Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
