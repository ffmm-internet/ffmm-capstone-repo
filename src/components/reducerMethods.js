const initializeTimes = (selectedDate) => fetchAPI(selectedDate);

const updateTimes = (state, action) => {
  const selectedDate = action.type;
  // todo ffm remove
  console.log("Dispatching " + selectedDate);

  const dateObjNormalized = selectedDate + "T00:00"; // otherwise, will be treated as UTC
  return fetchAPI(new Date(dateObjNormalized));
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
const submitAPI = function (formData) {
  return true;
};

export { initializeTimes, updateTimes };
