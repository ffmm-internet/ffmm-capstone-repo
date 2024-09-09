import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm";
import { MemoryRouter } from "react-router-dom";
import { updateTimes, initializeTimes } from "./components/reducerMethods";

describe("BookingForm", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Booking Details");
    expect(headingElement).toBeInTheDocument();
  });

  test("Allows the user to submit BookingForm and dispatches date", () => {
    const submitForm = jest.fn();
    const dispatch = jest.fn();
    const navigateToConfirmationPage = jest.fn();

    // Set the date to 2024-09-04, i.e. as used in new Date()
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2024-09-04T00:00:00"));

    render(
      <BookingForm
        submitForm={submitForm}
        dispatch={dispatch}
        availableTimes={["17:00", "18:00", "19:00"]}
        navigateToConfirmationPage={navigateToConfirmationPage}
      />
    );

    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByText(/Reserve Now/);

    fireEvent.change(dateInput, { target: { value: "2024-09-04" } });
    fireEvent.change(timeInput, { target: { value: "17:00" } });
    fireEvent.change(numberOfGuestsInput, { target: { value: "2" } });
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });
    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: "2024-09-04",
    });

    jest.useRealTimers();
  });
});

describe("reducerMethods", () => {
  test("updateTimes", () => {
    const expected = [
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "20:00",
      "22:00",
      "22:30",
    ];
    const result = updateTimes(null, { type: "2024-09-05" });
    expect(result).toEqual(expected);
  });

  test("initializeTimes", () => {
    const expected = ["17:00", "17:30", "20:30", "22:30"];
    const result = initializeTimes("2024-09-15");
    expect(result).toEqual(expected);
  });
});

describe("submitForm", () => {
  // NOTE: The following doesn't work - see https://github.com/jestjs/jest/issues/6798
  // const spyLocalStorageGetItem = jest.spyOn(localStorage, "getItem");

  let spyLocalStorageGetItem;
  let spyLocalStorageSetItem;

  beforeEach(() => {
    spyLocalStorageGetItem = jest.spyOn(Storage.prototype, "getItem");
    spyLocalStorageGetItem.mockReturnValue("[]");

    spyLocalStorageSetItem = jest.spyOn(Storage.prototype, "setItem");

    // Set the date to 2024-09-04, i.e. as used in new Date()
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2024-09-04T00:00:00"));

    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Main></Main>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test("calls localStorage.getItem() with key 'bookings' when submitting the form", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByText(/Reserve Now/);

    fireEvent.change(dateInput, { target: { value: "2024-09-04" } });
    fireEvent.change(timeInput, { target: { value: "17:00" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "2" } });
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });
    fireEvent.click(submitButton);

    expect(spyLocalStorageGetItem).toHaveBeenCalledWith("bookings");
  });

  test("calls localStorage.setItem() with correct arguments when submitting the form", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByText(/Reserve Now/);

    fireEvent.change(dateInput, { target: { value: "2024-09-04" } });
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "3" } });
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });
    fireEvent.click(submitButton);

    expect(spyLocalStorageSetItem).toHaveBeenCalledWith(
      "bookings",
      '[{"bookingDate":"2024-09-04","bookingTime":"17:30","bookingNumberOfGuests":"3","bookingOccasion":"Birthday"}]'
    );
  });

  test("calls localStorage.setItem() with correct arguments when submitting the form and localStorage already has an entry", () => {
    spyLocalStorageGetItem.mockReturnValue(
      '[{"bookingDate":"2024-09-04","bookingTime":"17:00","bookingNumberOfGuests":"2","bookingOccasion":"Birthday"}]'
    );

    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByText(/Reserve Now/);

    fireEvent.change(dateInput, { target: { value: "2024-09-05" } });
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "3" } });
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });
    fireEvent.click(submitButton);

    expect(spyLocalStorageSetItem).toHaveBeenCalledWith(
      "bookings",
      '[{"bookingDate":"2024-09-04","bookingTime":"17:00","bookingNumberOfGuests":"2","bookingOccasion":"Birthday"},' +
        '{"bookingDate":"2024-09-05","bookingTime":"17:30","bookingNumberOfGuests":"3","bookingOccasion":"Anniversary"}]'
    );
  });
});

describe("html5 attribute validation", () => {
  test("date input should be required", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/Choose Date:/);
    expect(dateInput).toBeRequired();
  });

  test("date input should be in the future", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/Choose Date:/);
    expect(dateInput).toHaveAttribute(
      "min",
      new Date().toISOString().split("T")[0]
    );
  });

  test("time input should be required", () => {
    render(<BookingForm />);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    expect(timeInput).toBeRequired();
  });

  test("number of guests input should be required", () => {
    render(<BookingForm />);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    expect(numberOfGuestsInput).toBeRequired();
  });

  test("number of guests input should be between 1 and 10", () => {
    render(<BookingForm />);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    expect(numberOfGuestsInput).toHaveAttribute("min", "1");
    expect(numberOfGuestsInput).toHaveAttribute("max", "10");
  });

  test("occasion input should be optional", () => {
    render(<BookingForm />);
    const occasionInput = screen.getByLabelText(/Occasion/);
    expect(occasionInput).not.toBeRequired();
  });
});

describe("javascript form validation", () => {
  let submitForm;
  let dispatch;
  let navigateToConfirmationPage;
  const availableTimes = ["17:00", "17:30", "20:30", "22:30"]; // these times are valid for 2024-09-15

  beforeEach(() => {
    submitForm = jest.fn();
    dispatch = jest.fn();
    navigateToConfirmationPage = jest.fn();

    // Set the date to 2024-09-15, i.e. as used in new Date()
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2024-09-15T00:00:00"));

    render(
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
        dispatch={dispatch}
        navigateToConfirmationPage={navigateToConfirmationPage}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test("reserve now button is disabled when date is not selected", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "" } }); // Note: no date selected yet
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "3" } });
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeDisabled();
  });

  test("reserve now button is disabled when date is in the past", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "2024-09-01" } }); // Note: current date is 2024-09-15, so this date is in the past
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "3" } });
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeDisabled();
  });

  test("reserve now button is disabled when time is not selected", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "2024-09-15" } });
    fireEvent.change(timeInput, { target: { value: "" } }); // Note: no time selected yet
    fireEvent.change(numberOfGuestsInput, { target: { value: "3" } });
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeDisabled();
  });

  test("reserve now button is disabled when time selected is the default option", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "2024-09-15" } });
    fireEvent.change(timeInput, { target: { value: "Select Time" } }); // Note: this time is the default option in the UI
    fireEvent.change(numberOfGuestsInput, { target: { value: "3" } });
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeDisabled();
  });

  test("reserve now button is disabled when number of guests is not selected", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "2024-09-15" } });
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } }); // Note: no number of guests selected yet
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeDisabled();
  });

  test("reserve now button is disabled when number of guests is lower than the minimum valid range", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "2024-09-15" } });
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "-4" } }); // Note: number of guests is negative
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeDisabled();
  });

  test("reserve now button is disabled when number of guests is higher than the maximum valid range", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "2024-09-15" } });
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "40" } }); // Note: number of guests is greater than 10
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeDisabled();
  });

  test("reserve now button is enabled when all fields are valid", () => {
    const dateInput = screen.getByLabelText(/Choose Date:/);
    const timeInput = screen.getByLabelText(/Choose Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(dateInput, { target: { value: "2024-09-15" } });
    fireEvent.change(timeInput, { target: { value: "17:30" } }); // this time needs to be one that shows up in the availableTimes array
    fireEvent.change(numberOfGuestsInput, { target: { value: "4" } });
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    const submitButton = screen.getByText(/Reserve Now/);
    expect(submitButton).toBeEnabled();
  });
});
