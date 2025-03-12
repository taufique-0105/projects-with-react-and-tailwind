import React from 'react'

const List = () => {
  return (
    <div className='flex shadow-2xl'>
        <div className='flex w-full justify-around h-10 items-center m-1 gap-1'>
            <div className='bg-green-700 w-full text-white h-full flex justify-center items-center'>Today</div>
            <div className='bg-green-700 w-full text-white h-full flex justify-center items-center'>Upcoming</div>
            <div className='bg-green-700 w-full text-white h-full flex justify-center items-center'>Passed</div>
        </div>
        <div></div>
    </div>
  )
}

export default List