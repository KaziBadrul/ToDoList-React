import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { InputTodo } from './components/InputTodo'
import { TodoList } from './components/TodoList'


function App() {
  
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const count = todos.length;

  const deleteTodo = (i) => {
    const newTodos = todos.filter((_, index) => index !== i);
    setTodos(newTodos);
  }

  useEffect(() => {
    if (!isLoaded) {
      const localTodos = localStorage.getItem("todos");
      if (localTodos) {
        const parsedTodos = JSON.parse(localTodos).map(todo => (
          {...todo,
          date: new Date(todo.date)}
        ));
        setTodos(parsedTodos);
      }
      setIsLoaded(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);


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
