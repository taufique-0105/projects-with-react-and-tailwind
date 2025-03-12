import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [card, setCard] = useState([])

  const fetchData = async () => {
    let d = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await d.json()
    setCard(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className='flex flex-wrap w-full text-amber-50 gap-1'>
        {card.map((c) => {
          return (
            <div className="bg-black rounded-2xl m-6 p-4 max-w-sm lg:gap-3 md:max-w-1/3 lg:max-w-1/4 mx-auto flex flex-col gap-3">
              <h1 className="text-xl font-bold text-white">{c.title}</h1>
              <p className="text-sm text-gray-300">{c.body}</p>
              <h2 className="text-sm text-gray-500">Donated by userId {c.userId}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
