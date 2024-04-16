import React from "react";

const General = () => {
  const [counter, setCounter] = React.useState(0);

  const decrease = (prev) => {
setCounter( prev - 1);
  };

  const increase = (prev) => {
 setCounter (prev + 1);
  };

  return (
    <div>
      <h5>Counter App</h5>

      <div>
        {" "}
        <button data-testId="decrement" onClick={() => decrease(counter)}>
          Prev{" "}
        </button>
        <span data-testId="counter"> {counter}</span>
        <button data-testId="increment" onClick={() => increase(counter)}>
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default General;
