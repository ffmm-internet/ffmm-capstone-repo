import "./ReservationDetails.css";

const ReservationDetails = () => (
  <section className="reservation-details-section">
    <div className="reservation-details-section-heading">
      <h2>Table Reservation Details</h2>
      <div>
        <h3>
          <span className="asterisk">*</span>
          <span className="required-field-text">Required Field</span>
        </h3>
      </div>
    </div>
    <div className="reservation-details-section-content">
      <table width="100%">
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="50%" />
        </colgroup>
        <tr>
          <td colspan="2">
            <label
              htmlFor="reservation-date-and-time"
              className="field-label reservation-date-and-time-label"
            >
              <span className="asterisk">*</span>
              Reservation Date and Time:
            </label>
          </td>
          <td>
            <input
              type="text"
              id="reservation-date-and-time"
              className="reservation-date-and-time-value"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label
              htmlFor="number-of-diners"
              className="field-label number-of-diners-label"
            >
              <span className="asterisk">*</span>
              Number of Diners:
            </label>
          </td>
          <td>
            <input
              type="text"
              id="number-of-diners"
              className="number-of-diners-value"
              maxlength="4"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label
              htmlFor="occasion-select"
              className="field-label occasion-select-label"
            >
              Select Occasion:
            </label>
          </td>
          <td>
            <select
              name="occasion"
              id="occasion-select"
              className="occasion-select-value"
            >
              <option value="">--Select Occasion--</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label
              htmlFor="reservation-comments"
              className="field-label reservation-comments-label"
            >
              Comments:
            </label>
          </td>
          <td colspan="2">
            <textarea
              id="reservation-comments"
              className="reservation-comments-value"
            ></textarea>
          </td>
        </tr>
      </table>
    </div>
  </section>
);

export default ReservationDetails;
