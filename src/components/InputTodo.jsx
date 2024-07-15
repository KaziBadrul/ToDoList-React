import React, { useState } from 'react'

export const InputTodo = (props) => {
  let { todos, setTodos, sortTodos } = props;

  const [todo, setTodo] = useState('');
  const headerTime = new Date();
  const headerMonth = headerTime.toLocaleString('default', {month: 'long'});

  const handleTaskInput = (p) => {
    if (todo.trim().length !== 0) {
      const newTime = new Date();
      const newTodos = [...todos, { task: todo, priority: p, date: newTime }];
      setTodo('');
      setTodos(sortTodos(newTodos));
    }
  }

  return (
    <>
    <div className="mt-20"></div>
    <div>
    <p className='text-[#130523] dark:text-blue-200 pt-3 text-2xl text-center'>
      {headerTime.getDate()}<sup>th</sup> {headerMonth}, {headerTime.getFullYear()}
      </p>
    </div>
      <div className='flex flex-col sm:flex-row justify-between items-center m-3'>
        <input className='flex-auto h-10 mx-1 pl-4 border-2 border-black rounded-3xl mb-2 sm:mb-0' 
          type='text' value={todo} placeholder='What to do?' onChange={e => setTodo(e.target.value)} />
        <div className='flex'>
          <button className='w-9 h-9 mx-3 bg-green-600 rounded-3xl ' onClick={() => handleTaskInput("1")}></button>
          <button className='w-9 h-9 mx-3 bg-yellow-600 rounded-3xl ' onClick={() => handleTaskInput("2")}></button>
          <button className='w-9 h-9 mx-3 bg-red-600 rounded-3xl ' onClick={() => handleTaskInput("3")}></button>
        </div>
      </div>
    </>
  )
}