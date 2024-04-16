import React from "react";

const General = () => {
  const [counter, setCounter] = React.useState(1);

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
        <button data-testid="decrement" onClick={() => decrease(counter)}>
          Prev{" "}
        </button>
        <span data-testid="counter"> {counter}</span>
        <button data-testid="increment" onClick={() => increase(counter)}>
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default General;
