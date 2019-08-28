import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/common.css';
import MenuNav from './components/MenuNav';
import Index from './views/TodoList';
import Hoc from './views/Hoc';

const App = (
  <Router>
    <div className="left">
      <MenuNav />
    </div>
    <div className="right">
      <Route path="/" exact component={Index} />
      <Route path="/hoc" exact component={Hoc} />
    </div>
  </Router>
);

ReactDOM.render(App, document.getElementById('root'));
