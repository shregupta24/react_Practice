import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")
  return (
    <div className='max-w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap px-2'>
        <button onClick={ () => setColor('red')}className='bg-red-500'>Red</button>
        <button  onClick={ () => setColor('green')}className='bg-green-500'>Green</button>
        <button  onClick={ () => setColor('blue')}className='bg-blue-500'>Blue</button>
      </div>
    </div>
  )
}

export default App
