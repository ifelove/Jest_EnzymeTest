import { screen,render,within } from "@testing-library/react";
import Userinput from "../UserInput"




describe(" Testing the userlist ", () => {
  test("render one per user", () => {
const users = [
  { name: "me", email: "me@gmail" },
  { name: "you", email: "you@gmail" },
];
//render component
const {container}=render(<Userinput users={users}/>)


//screen.logTestingPlaygroundURL()


//const rows=within(screen.getByTestId('users')).getAllByRole("row")

const rows=container.querySelectorAll("tbody tr")

expect(rows).toHaveLength(2)




  });

  test("render the name and email of the user", () => {





  });
});