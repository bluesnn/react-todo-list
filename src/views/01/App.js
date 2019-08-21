import React, { useState } from 'react';
import './App.css';
import {
  TodoHeader,
  TodoInput,
  TodoList
} from '../../components';

function App() {
  const [tips] = useState('事项列表1');
  const [list] = useState([{
    id: 0,
    title: 'banner',
    status: false
  },{
    id: 1,
    title: 'apple',
    status: true
  },]);

  return (
    <div className="App">
      <TodoHeader desc="提醒事项">
        {tips}
      </TodoHeader>
      <TodoInput placeholder="请输入" />
      <TodoList list={list} />
    </div>
  );
}

export default App;
