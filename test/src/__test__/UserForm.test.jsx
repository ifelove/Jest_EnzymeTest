import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../UserForm";

describe("Testing the userform component", () => {
  test("It should show two inputs and a button", () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole("textbox");

    const button = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test("the function should be called and has the rigth arguments", () => {
    const mockFunction = jest.fn();
    render(<UserForm onUserAdd={mockFunction} />);

    const [inputName, inputEmail] = screen.getAllByRole("textbox");

    user.click(inputName);
    user.keyboard("me");

    user.click(inputEmail);
    user.keyboard("me@gmail.com");

    const button = screen.getByRole("button");
    user.click(button);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith({
      name: "me",
      email: "me@gmail.com",
    });
  });
});
