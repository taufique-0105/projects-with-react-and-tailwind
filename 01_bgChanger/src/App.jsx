import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('white');

  return (
    <div className='grid place-items-center relative h-screen justify-center items-center'
    style={{'backgroundColor': colour}}>
      <div className='bg-white grid grid-flow-col gap-2 absolute w-auto p-4 shadow-2xl rounded-full bottom-10 '>
        <button className='bg-red-600 p-2 px-4 rounded-full text-white shadow-2xl shadow-black'
        onClick={() => setColour('red')}
        >Red</button>
        <button className='bg-green-600 p-2 px-4 rounded-full text-white shadow-xl'
        onClick={() => setColour('green')}
        >Green</button>
        <button className='bg-white-600 p-2 px-4 rounded-full text-black shadow-xl'
        onClick={() => setColour('white')}
        >White</button>
        <button className='bg-teal-500 p-2 px-4 rounded-full text-white shadow-xl'
        onClick={() => setColour('teal')}
        >Teal</button>
        <button className='bg-pink-600 p-2 px-4 rounded-full text-white shadow-xl'
        onClick={() => setColour('pink')}
        >Pink</button>
        <button className='bg-purple-600 p-2 px-4 rounded-full text-white shadow-xl'
        onClick={() => setColour('purple')}
        >Purple</button>
        <button className='bg-yellow-600 p-2 px-4 rounded-full text-white shadow-xl'
        onClick={() => setColour('yellow')}
        >Yellow</button>
        <button className='bg-violet-600 p-2 px-4 rounded-full text-white shadow-xl'
        onClick={() => setColour('violet')}
        >Violet</button>
      </div>
    </div>
  )
}

export default App
