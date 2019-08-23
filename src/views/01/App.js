import React, { useState } from 'react';
import './App.css';
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from '../../components';

function App() {
  const [tips] = useState('事项列表1');
  const [list, setList] = useState([{
    id: 0,
    title: 'banner',
    status: true
  },{
    id: 1,
    title: 'apple',
    status: false
  }]);

  const addTodo = todoTitle => {
    const addData = [{
      id: list.length,
      title: todoTitle,
      status: false
    }]
    setList(list.concat(addData))
  }

  const changeState = id => {
    // const itemState = !list[id].status;
    console.log('aa')
    // setList(newList[id].status= itemState)
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
