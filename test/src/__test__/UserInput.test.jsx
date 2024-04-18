import { screen, render, within } from "@testing-library/react";
import Userinput from "../UserInput";

describe(" Testing the userlist ", () => {
  const users = [
    { name: "me", email: "me@gmail" },
    { name: "you", email: "you@gmail" },
  ];
  test("render one per user", () => {
    //render component
    const { container } = render(<Userinput users={users} />);

    //screen.logTestingPlaygroundURL()

    //const rows=within(screen.getByTestId('users')).getAllByRole("row")

    const rows = container.querySelectorAll("tbody tr");

    expect(rows).toHaveLength(2);
  });

  test("render the name and email of the user", () => {
    render(<Userinput users={users} />);

    users.forEach((user) => {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
});
