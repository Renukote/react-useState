import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function changeOne(value) {
    if(value == 2) return setCount(count*2);
    else return setCount(count + value);
  }
  
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => changeOne(1)}>Add 1</button>
      <button onClick={() => changeOne(-1)}>Reduce 1</button>
      <button onClick={() => changeOne(2)}>Double</button>
    </>
  );
}

export default App;
