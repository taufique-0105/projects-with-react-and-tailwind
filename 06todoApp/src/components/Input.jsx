import React from 'react'

const Input = () => {
    const addTask = (e) => {
        e.preventDefault()
        const task = e.target.elements.task.value
        console.log(task)
    }
  return (
    <div className='flex w-full justify-center gap-2 m-2'>
        <input type='text' placeholder='Enter task....' name='task' className='border-1 p-2 rounded-2xl px-4'/>
        <button className='border py-2 px-4 rounded-2xl bg-green-700 text-white hover:bg-gray-400 ' onClick={addTask}>Submit</button>
    </div>
  )
}

export default Input