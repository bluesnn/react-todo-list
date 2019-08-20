import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/common.css';
import MenuNav from './components/MenuNav';
import Index from './views/01/App';
import List from './views/02/App';

const App = (
  <Router>
    <div className="wrapper">
      <div>
        <MenuNav />
      </div>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/list" exact component={List} />
      </div>
    </div>
  </Router>
);

ReactDOM.render(App, document.getElementById('root'));
