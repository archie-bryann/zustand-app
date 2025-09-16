import React, { useState } from 'react';
import './App.css';

function App() {
  const [count] = useState(0);
  return <OtherComponent count = {count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  return <div>{count}</div>
}

export default App;
