import React from 'react';
import './App.css';
import {
  TodoHeader,
  TodoInput,
  TodoList
} from '../../components';

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
