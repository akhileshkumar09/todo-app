import './App.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo, toggleTodo, deleteTodo} from './redux/TodoSlice'

function App() {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className='task'
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            
          >
          <span>
          <input type='checkbox' checked ={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text} </span>
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

