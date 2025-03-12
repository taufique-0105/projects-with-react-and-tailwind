import React from 'react'
import edit from '../assets/edit.png'
import bin from '../assets/bin.png'

const List = () => {
  const handelDelete = () => {
    console.log('Delete clicked')
  }

  const handelEdit = () => {
    console.log('Edit clicked')
  }

  const handelAdd = () => {
    console.log('Add clicked')
  }
  
  return (
    <div className='flex justify-center gap-1.5 w-full items-center'>
      <div>
        <input type="checkbox" name="" id="" className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500 dark:ring-offset-gray-800 focus:ring-2 dark:gb-gray-700 dark:border-gray-600' />
      </div>
      <div className='text-center border p-1.5 rounded-xl bg-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
      <div className='flex gap-1'>
        <button onClick={handelDelete} className='text-white bg-green-700 hover:bg-blue-500 rounded-lg p-2'><img src={bin} alt="" width={20}/></button>
        <button onClick={handelEdit} className='text-white bg-green-700 hover:bg-blue-500 rounded-lg px-2 py-2'><img src={edit} alt="" width={20}/></button>
      </div>
    </div>
  )
}

export default List