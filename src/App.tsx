import "./App.css";
import { useCounterStore } from "./store";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count", count)
}

function App() {
  const count = useCounterStore((state) => state.count)

  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync)
  const decrement = useCounterStore((state) => state.decrement);

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
