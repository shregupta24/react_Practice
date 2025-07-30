import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-3xl font-bold underline text-blue-500">
        Tailwind is working!
      </div>
      <h1 className="text-3xl bg-green-400 p-3 rounded-md">
        Tailwind with css
      </h1>
    </>
  );
}

export default App;
