import React, {useState} from 'react';
import './App.css';

import Form from './components/form'
import List from './components/todoList';

function App() {
  const [inputTask, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo-app">
     <header>
      <h1>To Do List</h1>
     </header>
     <Form 
      inputTask = {inputTask} 
      todos = {todos} 
      setTodos = {setTodos} 
      setTask = {setTask}
      />
     <List setTodos = {setTodos} todos = {todos}/>
    </div>
  );
}

export default App;
