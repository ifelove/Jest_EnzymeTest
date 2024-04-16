
import { render, screen, fireEvent } from "@testing-library/react";
import General from "../counter/General";

describe("testing the the counter",()=>{

test("increament testing",()=>{

    //rendering the component in virtual dom
    render(<General/>)

    // select the element to test
    const counter=screen.getByTestId("counter")
      // const decrement = screen.getByTestId("decrement");
        const incrementBtn = screen.getByTestId("increment");

        fireEvent.click(incrementBtn);


        expect(counter).toHaveTextContent("2")

})

})