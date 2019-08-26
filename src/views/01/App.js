import React, { useState, useEffect } from 'react';
import './App.css';
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from '../../components';
import { getTodos } from '../../services';

function App() {
  const [tips] = useState('事项列表1');
  const [list, setList] = useState([{
    id: 0,
    title: 'banner',
    completed: true
  },{
    id: 1,
    title: 'apple',
    completed: false
  },{
    id: 2,
    title: 'apple',
    completed: false
  },{
    id: 3,
    title: 'apple',
    completed: false
  }]);

  useEffect(() => {
    getTodos().then(res => {
      // setList(res.data)
      console.log(res)
    })
  })
  // componentDidMount() {
  //   getTodos().then(res => {
  //     console.log(res)
  //   })
  // }

  const addTodo = todoTitle => {
    setList([...list, {
      id: list.length,
      title: todoTitle,
      completed: false
    }])
  }

  const changeState = id => {
    setList(list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    }))
  }

  return (
    <div className="App">
      <TodoHeader desc="提醒事项">
        {tips}
      </TodoHeader>
      <TodoInput placeholder="请输入" addTodo={addTodo} />
      <TodoList list={list} changeState={changeState} />
      <Like />
    </div>
  );
}

export default App;
