import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer"
import General from "../counter/General";

describe("testing the the counter", () => {
  test("increament testing", () => {
    //rendering the component in virtual dom
    render(<General />);

    // select the element to test
    const counter = screen.getByTestId("counter");
    // const decrement = screen.getByTestId("decrement");
    const incrementBtn = screen.getByTestId("increment");

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("2");
  });

  test("decreament testing", () => {
    //rendering the component in virtual dom
    render(<General />);

    // select the element to test
    const counter = screen.getByTestId("counter");
    // const decrement = screen.getByTestId("decrement");
    const decrementBtn = screen.getByTestId("decrement");

    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("0");
  });
});

describe(" counter snapshot", () => {


    it("It show matches DOM snapshot",()=>{

        const tree=renderer.create(<General/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
});
