const initializeTimes = (selectedDate) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  const selectedDate = action.type;
  // todo ffm remove
  console.log("Dispatching " + selectedDate);
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export { initializeTimes, updateTimes };
