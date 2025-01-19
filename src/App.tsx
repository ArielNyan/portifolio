import { useState } from 'react'
import './App.css'
import Window from './applications/comp/Window'


function App() {
  const [zCounter, setZCounter] = useState<number>(1)
  const bringTofront = () => {
    setZCounter((prev)=>prev+1)
    return zCounter
  }


  return (
    <>
      <Window zindex={1} bringToFront={bringTofront}/>
      <Window zindex={2} bringToFront={bringTofront}/>
    </>
  )
}

export default App
