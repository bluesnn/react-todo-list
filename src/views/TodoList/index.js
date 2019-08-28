import React from 'react';
import './App.css';
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from '../../components';
import useHackerApi from './useHackerApi';

function App() {
  const {tips, list, setList, isLoading, isError} = useHackerApi();

  const addTodo = todoTitle => {
    setList([...list, {
      id: list.length + 1,
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
      <Like />
      {
        isLoading ?
        <div>Loading ...</div> :
        <TodoList list={list} changeState={changeState} />
      }
      {isError && <div>请求错误 ...</div>}
    </div>
  );
}

export default App;
