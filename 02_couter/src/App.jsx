import { useState } from 'react'
import './App.css'

function App() {
    const[count,setCount] = useState(0);
    const addValue = ()=>{
      setCount(count+1)
    }
    const subValue = () =>{
      setCount(count-1)
    }
  return (
    <>
      <h1>React Counter Project</h1>
      <h2>value of count is {count}</h2>
      <button onClick={addValue}>Add 1 </button>{" "}
      <button onClick={subValue}>Subtract 1</button>
    </>
  )
}

export default App
