import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listhead from './components/Listhead'
import List from './components/List'
import Input from './components/Input'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-gray-200'>
      <Navbar />
      <Input />
      <div className='w-full flex justify-center'>
        <div className='flex justify-center bg-gray-300 flex-col w-full sm:w-3/4 md:w-2/5'>
          <Listhead />
          <List />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
