import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-teal-600 h-screen text-black">
        <div className='shadow-2xl fixed top-0 right-0 left-0'>
          <nav className='flex flex-wrap justify-around p-4'>
            <h1 className="text-4xl font-bold text-black">My Website</h1>
            <ul className='flex flex-wrap gap-4 items-center'>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className="text-6xl font-bold">Welcome to my website!</h1>
          <h2>Hi, I'm Taufique,<br /> I'm a frontend developer</h2>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default App
