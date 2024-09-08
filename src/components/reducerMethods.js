const initializeTimes = (selectedDate) => {
  return updateTimes(null, { type: selectedDate });
};

const updateTimes = (_state, action) => {
  const selectedDate = action.type;

  const dateObjNormalized = selectedDate + "T00:00"; // otherwise, will be treated as UTC

  const availableTimes = fetchAPI(new Date(dateObjNormalized));
  const bookingsFromStorage = localStorage.getItem("bookings");
  const bookingsData = bookingsFromStorage
    ? JSON.parse(bookingsFromStorage)
    : [];

  const filteredAvailableTimes = availableTimes.filter(
    (time) =>
      !bookingsData.some(
        (booking) =>
          booking.bookingDate === selectedDate && booking.bookingTime === time
      )
  );

  return filteredAvailableTimes;
};

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (_formData) {
  return true;
};

export { initializeTimes, updateTimes, submitAPI };
