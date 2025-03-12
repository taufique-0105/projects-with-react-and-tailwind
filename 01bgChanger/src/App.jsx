import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('black')
  function changeColour(e) {
    setColour(e)
  }

  return (
      <div className='w-full h-screen' style={{backgroundColor: colour}}>
        <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap bg-amber-200 justify-between p-3 m-1.5 gap-3 rounded-2xl border-b-black border-2'>
            <button className='rounded-2xl border-2 border-b-black p-2 bg-red-700' onClick={() => changeColour('red')}>Demo1</button>
            <button className='rounded-2xl border-2 border-b-black p-2 bg-green-500' onClick={()=> changeColour('green')}>Demo1</button>
            <button className='rounded-2xl border-2 border-b-black p-2 bg-blue-700' onClick={() => changeColour('blue')}>Demo1</button>
          </div>
          <div className='flex flex-wrap bg-amber-200 justify-between p-3 m-1.5 gap-3 rounded-2xl border-b-black border-2'>
            <input type="text" placeholder='Enter the colour name.....' className='border-2 border-b-black bg-cyan-500 rounded-2xl p-2' value={colour} onChange={(e) => setTimeout(setColour(e.target.value), 2000)} />
          </div>
        </div>
      </div>
  )
}

export default App
