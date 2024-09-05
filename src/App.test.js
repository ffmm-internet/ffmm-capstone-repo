import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { updateTimes, initializeTimes } from "./components/reducerMethods";

describe("BookingForm", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Booking Details");
    expect(headingElement).toBeInTheDocument();
  });

  test("Allows the user to submit BookingForm and dispatches date", () => {
    const onAdd = jest.fn();
    const dispatch = jest.fn();

    render(
      <BookingForm
        onAdd={onAdd}
        dispatch={dispatch}
        availableTimes={["17:00", "18:00", "19:00"]}
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

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: "2024-09-04",
    });
  });
});

describe("reducerMethods", () => {
  test("updateTimes", () => {
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = updateTimes(new Date(), "2024-09-04");
    expect(result).toEqual(expected);
  });

  test("initializeTimes", () => {
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes(new Date());
    expect(result).toEqual(expected);
  });
});
