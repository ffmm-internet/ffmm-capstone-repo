import "./ContactDetails.css";

const ContactDetails = () => (
  <section className="contact-details-section">
    <div className="contact-details-section-heading">
      <h2>Contact Details</h2>
    </div>
    <div className="contact-details-section-content">
      <table width="100%">
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="50%" />
        </colgroup>
        <tr>
          <td>
            <label
              htmlFor="contact-full-name"
              className="field-label contact-full-name-label"
            >
              <span className="asterisk">*</span>
              Full Name:
            </label>
          </td>
          <td colspan="2">
            <input
              type="text"
              id="contact-full-name"
              className="contact-full-name-value"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="email" className="field-label email-label">
              <span className="asterisk">*</span>
              Email:
            </label>
          </td>
          <td colspan="2">
            <input type="text" id="email" className="email-value" />
          </td>
        </tr>
      </table>
    </div>
  </section>
);

export default ContactDetails;
