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
  const [list] = useState([{
    id: 0,
    title: 'banner',
    status: false
  },{
    id: 1,
    title: 'apple',
    status: true
  }]);

  const addTodo = todoTitle => {
    console.log(1)
    list.push({
      id: list.length,
      title: todoTitle,
      status: false
    })
    console.log(list)
  }


  return (
    <div className="App">
      <TodoHeader desc="提醒事项">
        {tips}
      </TodoHeader>
      <TodoInput placeholder="请输入" addTodo={addTodo}/>
      <TodoList list={list} />
      <Like />
      <ul>
          {
            list.map(item => {
              return (
                <li key = {item.id}>
                  {item.title}
                </li>
              )
            })
          }

      </ul>
    </div>
  );
}

export default App;
