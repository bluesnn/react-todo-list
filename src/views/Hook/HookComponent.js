import React, { useState, useEffect } from 'react';
import {
  TodoInput,
  TodoList,
  Like
} from '../../components';

function App() {
  const [list, setList] = useState([{
    id: 0,
    title: 'banner',
    completed: false
  },{
    id: 1,
    title: 'apple',
    completed: true
  }]);

   const addTodo = todoTitle => {
    setList([...list, {
      id: list.length,
      title: todoTitle,
      status: false
    }])
  }


  return (
    <div className="App">
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