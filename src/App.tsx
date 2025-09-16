import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

// flexibility do actions inside a function or a component

const logCount = () => {
  const count = useCounterStore.getState().count; // inside function (outside of component)
  console.log("count", count)
}

const setCount = () => {
  useCounterStore.setState({ count: 1 }) // update state (outside of component)
}

function App() {
  // be specific like below: `state.count` not `state` destructured to listen to only count
  const count = useCounterStore((state) => state.count) // hook inside component

  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync)
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount(); 
    setCount();
  }, [])

  return (
    <div
      className="App"
      style={{
        fontSize: "80px",
        marginTop: "50px",
        fontWeight: 450,
      }}
    >
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync}>Increment Async</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
