import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-around h-20 sticky top-0 shadow-2xl  shadow-black text-white items-center bg-slate-700'>
        <h1 className='text-2xl font-bold'>Displaying cards using API</h1>
        <ul className='flex justify-around w-1/3'>
            <li>Home</li>
            <li>About</li>
            <li>Contact US</li>
        </ul>
    </div>
  )
}

export default Navbar