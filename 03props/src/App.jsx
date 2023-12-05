import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const tempObj = {
    name: 'chaiaurcode',
    age: 20,
  }
  const tempList = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-md mb-4 '>Hello World</h1>
      <Card channel="chaiaurcode" tempObj={tempObj} tempList={tempList} />
      <Card />
    </>
  )
}

export default App
