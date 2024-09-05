const BookingSlot = (props) => {
  return (
    <>
      <option value={props.time}>{props.time}</option>
    </>
  );
};

export default BookingSlot;
