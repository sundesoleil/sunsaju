import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Result';
import Nav from './components/Nav'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
      </Switch>
    </div>
  );
}

export default App;
