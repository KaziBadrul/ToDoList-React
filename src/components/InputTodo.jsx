import React, { useState } from 'react'

export const InputTodo = (props) => {
  let { todos, setTodos } = props;

  const [todo, setTodo] = useState('');

  const handleTaskInput = (p) => {
    if (todo.trim().length !== 0) {
      const newTime = new Date();
      const newTodos = [...todos, { task: todo, priority: p, date: newTime }];
      setTodo('');
      setTodos(newTodos);
    }
  }

  return (
    <>
      <div className='flex flex-col sm:flex-row justify-between items-center m-3'>
        <input className='flex-auto h-10 mx-1 pl-4 border-2 border-black rounded-3xl mb-2 sm:mb-0' 
          type='text' value={todo} placeholder='What to do?' onChange={e => setTodo(e.target.value)} />
        <div className='flex'>
          <button className='w-10 h-10 bg-green-600 rounded-3xl mx-1' onClick={() => handleTaskInput("1")}></button>
          <button className='w-10 h-10 bg-yellow-600 rounded-3xl mx-1' onClick={() => handleTaskInput("2")}></button>
          <button className='w-10 h-10 bg-red-600 rounded-3xl mx-1' onClick={() => handleTaskInput("3")}></button>
        </div>
      </div>
    </>
  )
}