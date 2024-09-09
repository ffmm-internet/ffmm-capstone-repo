import "./BookingForm.css";
import { useState } from "react";
import BookingSlot from "./BookingSlot";
import BookingExistingReservations from "./BookingExistingReservations";
import { Link } from "react-router-dom";

const DateErrorMessage = () => {
  return (
    <p className="field-error">
      Please select a valid date (it must be today or in the future).
    </p>
  );
};

const TimeErrorMessage = (availableTimes) => {
  if (availableTimes && availableTimes.length > 0) {
    return <p className="field-error">Please select a time.</p>;
  } else {
    return (
      <p className="field-error">
        No available times on this date. Please select another date.
      </p>
    );
  }
};

const NumberOfGuestsErrorMessage = () => {
  return (
    <p className="field-error">
      Please enter a valid number of guests (it must be between 1 and 10).
    </p>
  );
};

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const BookingForm = (props) => {
  const todayString = getTodayString();

  const [showExistingReservations, setShowExistingReservations] =
    useState(false);

  const [bookingDate, setBookingDate] = useState({
    value: todayString,
    isTouched: false,
  });
  const [bookingTime, setBookingTime] = useState({
    value: "Select Time",
    isTouched: false,
  });
  const [bookingNumberOfGuests, setBookingNumberOfGuests] = useState({
    value: "1",
    isTouched: false,
  });
  const [bookingOccasion, setBookingOccasion] = useState("Other");

  const isFormValid = () => {
    const numGuests =
      bookingNumberOfGuests && bookingNumberOfGuests.value
        ? Number(bookingNumberOfGuests.value)
        : 0;

    return (
      bookingDate &&
      bookingDate.value &&
      new Date(bookingDate.value + "T00:00:00").getDate() >=
        new Date().getDate() &&
      bookingTime &&
      bookingTime.value &&
      bookingTime.value !== "Select Time" &&
      numGuests >= 1 &&
      numGuests <= 10
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({
      bookingDate: bookingDate.value,
      bookingTime: bookingTime.value,
      bookingNumberOfGuests: bookingNumberOfGuests.value,
      bookingOccasion,
    });
    clearForm();
  };

  const clearForm = () => {
    props.dispatch({ type: todayString });

    setBookingDate({ value: todayString, isTouched: false });
    setBookingTime({
      value: "Select Time",
      isTouched: false,
    });
    setBookingNumberOfGuests({ value: "1", isTouched: false });
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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            props.navigateToConfirmationPage("/booking-confirmed");
          }}
        >
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
                    value={bookingDate.value}
                    min={todayString}
                    onChange={(e) => {
                      setBookingDate({
                        ...bookingDate,
                        value: e.target.value,
                        isTouched: true,
                      });
                      props.dispatch({ type: e.target.value });
                    }}
                    required
                  />
                  {bookingDate.isTouched &&
                    (!bookingDate.value ||
                      new Date(bookingDate.value + "T00:00:00").getDate() <
                        new Date().getDate()) &&
                    DateErrorMessage()}
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
                    value={bookingTime.value}
                    onChange={(e) => {
                      setBookingTime({
                        ...bookingTime,
                        value: e.target.value,
                      });
                    }}
                    onBlur={() =>
                      setBookingTime({ ...bookingTime, isTouched: true })
                    }
                    required
                  >
                    <option value="Select Time">Select Time</option>
                    {!!props.availableTimes &&
                      props.availableTimes.map((time) => (
                        <BookingSlot key={time} time={time} />
                      ))}
                  </select>
                  {bookingTime.isTouched &&
                    bookingTime.value === "Select Time" &&
                    TimeErrorMessage(props.availableTimes)}
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
                    value={bookingNumberOfGuests.value}
                    onChange={(e) =>
                      setBookingNumberOfGuests({
                        ...bookingNumberOfGuests,
                        value: e.target.value,
                        isTouched: true,
                      })
                    }
                    required
                  />
                  {bookingNumberOfGuests.isTouched &&
                    (!bookingNumberOfGuests.value ||
                      bookingNumberOfGuests.value < 1 ||
                      bookingNumberOfGuests.value > 10) &&
                    NumberOfGuestsErrorMessage(props.availableTimes)}
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
                  <button
                    className="reserve-now-button"
                    type="submit"
                    disabled={!isFormValid()}
                    aria-label="On Click"
                  >
                    Reserve Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <Link
          to="#"
          aria-label="On Click"
          type="button"
          href="#"
          onClick={() => setShowExistingReservations(!showExistingReservations)}
          className="show-existing-reservations"
        >
          <div className="show-existing-reservations-heading">
            {showExistingReservations ? "Hide" : "Show"} existing reservations
            (for verification purposes only)
          </div>
        </Link>
      </div>
      {showExistingReservations && (
        <BookingExistingReservations bookings={props.bookings} />
      )}
    </section>
  );
};

export default BookingForm;
export { getTodayString };
