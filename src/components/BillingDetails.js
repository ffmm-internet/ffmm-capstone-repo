import "./BillingDetails.css";

import helpIconImage from "../images/helpIcon.png";

const BillingDetails = () => (
  <section className="billing-details-section">
    <div className="billing-details-section-heading">
      <h2>Billing Details</h2>
    </div>
    <div className="billing-details-section-content">
      <table width="100%">
        <colgroup>
          <col width="50%" />
          <col width="50%" />
        </colgroup>
        <tr>
          <td>
            <label
              htmlFor="credit-card-number"
              className="field-label credit-card-number-label"
            >
              <span className="asterisk">*</span>
              Credit Card Number:
            </label>
          </td>
          <td>
            <input
              type="text"
              id="credit-card-number"
              className="credit-card-number-value"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label
              htmlFor="expiration-date"
              className="field-label expiration-date-label"
            >
              <span className="asterisk">*</span>
              Expiration Date:
            </label>
          </td>
          <td>
            <input
              type="text"
              id="expiration-date"
              className="expiration-date-value"
            />
          </td>
        </tr>
        <tr>
          <td>
            <div className="cvv-label-wrapper">
              <label htmlFor="cvv" className="field-label cvv-label">
                <span className="asterisk">*</span>
                CVV:
              </label>
              <img className="help-icon" src={helpIconImage} alt="Help Icon" />
            </div>
          </td>
          <td>
            <input type="text" id="cvv" className="cvv-value" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="zip-code" className="field-label zip-code-label">
              <span className="asterisk">*</span>
              Zip Code:
            </label>
          </td>
          <td>
            <input type="text" id="zip-code" className="zip-code-value" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button className="reserve-now-button">Reserve Now</button>
          </td>
        </tr>
      </table>
    </div>
  </section>
);

export default BillingDetails;
