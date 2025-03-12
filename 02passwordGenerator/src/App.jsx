import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [passsword, setPasssword] = useState("")


  
  
  const passGenerate = useCallback(()=> {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numbers) str += "0123456789"
    if(symbols) str += "!@#$%^&*()-_=+[{]};:'\",.<>/?"
    
    for(let i=0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPasssword(pass)
  }, [length, numbers, symbols])
  
  useEffect(()=> {
    passGenerate()
  },[length, numbers, symbols])
  
  const passCopy = () => {
    window.navigator.clipboard.writeText(passsword)
    passRef.current?.select()
  }

  const passRef = useRef(null)

  return (
    <>
      <div className='bg-black flex flex-col w-full max-w-md mx-auto shadow-md rounded-2xl px-4 py-3 my-8 text-cyan-400'>
        <h1 className='text-center my-3'>Custom password generator</h1>
        <div className='flex flex-wrap gap-3 text-center w-full justify-center'>
          <input type="text" value={passsword} ref={passRef} readOnly className='bg-gray-500 rounded-2xl p-1 m-1 px-2'/>
          <button onClick={passCopy} className='border-2 rounded-2xl px-4 hover:border-b-black hover:bg-cyan-400 hover:text-black'>Copy</button>
        </div>
        <div className='flex gap-3 justify-center'>
          <div>
            <input type="range"  min={0} max={20} value={length} onChange={(e) => setLength(e.target.value)} name="" id="" />
            <label htmlFor="length"> length: {length}</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" defaultChecked={numbers} onChange={()=> setNumbers((num) => !num)} />
            <label htmlFor="numbers"> Numbers</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" defaultChecked={symbols} onChange={() => setSymbols((sym) => !sym)}/>
            <label htmlFor="symbols"> Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
