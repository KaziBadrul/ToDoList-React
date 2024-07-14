import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { InputTodo } from './components/InputTodo'
import { TodoList } from './components/TodoList'


function App() {
  
  const [todos, setTodos] = useState([]);
  const count = todos.length;

  const deleteTodo = (i) => {
    const newTodos = todos.filter((_, index) => index !== i);
    setTodos(newTodos);
  }

  return (
    <>
     <div className=" flex flex-col grow h-screen">
     <Header count={count}/>
     <InputTodo todos={[...todos]} setTodos={setTodos}/>
     <ol>
       
        {todos.map((todoObject, index) => {
          return <TodoList key={index} todoObject={todoObject} index={index} deleteTodo={deleteTodo}/>
        })}
        
     </ol>
     </div>
     
     
    </>
  )
}

export default App
