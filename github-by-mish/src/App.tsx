import { useState } from "react";
import "./App.css";
import Repositories from "./component/Repositories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Repositories />
    </>
  );
}

export default App;
