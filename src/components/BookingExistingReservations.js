import "./BookingExistingReservations.css";

const BookingExistingReservations = (props) => {
  if (props.bookings.length > 0) {
    return (
      <section className="booking-existing-reservations-section">
        <div className="booking-existing-reservations-section-heading">
          <h2>Existing Bookings</h2>
        </div>
        <div className="booking-existing-reservations-section-content">
          <table width="100%">
            <colgroup>
              <col width="100%" />
            </colgroup>
            <tbody>
              {props.bookings.map((booking) => (
                <tr key={`${booking.bookingDate + booking.bookingTime}`}>
                  <td>{`${booking.bookingDate} at ${booking.bookingTime} for ${booking.bookingNumberOfGuests} guest(s) and ${booking.bookingOccasion}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  } else {
    return (
      <section className="booking-existing-reservations-section">
        <div className="booking-existing-reservations-section-heading">
          <h2>There are no existing bookings</h2>
        </div>
      </section>
    );
  }
};

export default BookingExistingReservations;
