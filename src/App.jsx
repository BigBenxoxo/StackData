/* 
Component Structure:
  - The state variable 'stack' is managed using the useState hook to represent the stack.
  - The 'pushToStack' function prompts the user to enter an item and adds it to the top of the stack.
  - The 'popFromStack' function removes the item from the top of the stack and alerts the user with the popped item.
*/

import { useState } from "react";

const App = () => {
  const [stack, setStack] = useState([]);

  const pushToStack = () => {
    const newItem = prompt("Enter item to push:");
    if (newItem !== null) {
      setStack((prevStack) => [newItem, ...prevStack]);
    }
  };

  const popFromStack = () => {
    if (stack.length > 0) {
      const poppedItem = stack[0];
      setStack((prevStack) => prevStack.slice(1));
      alert(`Popped item: ${poppedItem}`);
    } else {
      alert("Stack is empty!");
    }
  };

  return (
    <div id="numbers">
      <h1>Ben's Lifo Stack</h1>
      <button onClick={pushToStack}>Add to Stack</button>
      <button onClick={popFromStack}>Remove from Stack</button>
      <div>
        <strong>Stack:</strong> {stack.join(", ")}
      </div>
    </div>
  );
};

export default App;
