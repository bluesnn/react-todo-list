import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './assets/css/common.css';
import MenuNav from './components/MenuNav';
import Index from './views/TodoList';
import Hoc from './views/Hoc';
import Cart from './views/Cart';
import ClassComponent from './views/Hook/ClassComponent';
import HookComponent from './views/Hook/HookComponent';

const App = (
  <Provider store={store}>
    <Router>
      <div className="left">
        <MenuNav />
      </div>
      <div className="right">
        <Route path="/" exact component={Index} />
        <Route path="/hoc" component={Hoc} />
        <Route path="/cart" component={Cart} />
        <Route path="/class-component" component={ClassComponent} />
        <Route path="/hook-component" component={HookComponent} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
