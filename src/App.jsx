import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { InputTodo } from './components/InputTodo'
import { TodoList } from './components/TodoList'


function App() {
  
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const count = todos.length;
  const [darkModeOn, setDarkModeOn] = useState(true);

  const deleteTodo = (i) => {
    const newTodos = todos.filter((_, index) => index !== i);
    setTodos(sortTodos(newTodos));
    
  }

  const sortTodos = (todos) => {
    return todos.sort((a, b) => b.priority - a.priority);
  };

  useEffect(() => {
    if (!isLoaded) {
      const localTodos = localStorage.getItem("todos");
      if (localTodos) {
        const parsedTodos = JSON.parse(localTodos).map(todo => (
          {...todo,
          date: new Date(todo.date)}
        ));
        setTodos(sortTodos(parsedTodos));
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
     <div className={`flex flex-col grow min-h-screen bg-slate-200 dark:bg-[#141439] ${darkModeOn ? 'dark' : ''}`}>
     <Header count={count} darkModeOn={darkModeOn} setDarkModeOn={setDarkModeOn}/>
     <InputTodo todos={[...todos]} setTodos={setTodos} sortTodos={sortTodos}/>
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
