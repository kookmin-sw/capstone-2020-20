import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import Login from "./container/Login";
import MyRoom from "./container/MyRoom";
import InRoom from "./container/InRoom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myroom" component={MyRoom} />
        <Route exact path="/inroom" component={InRoom} />
      </BrowserRouter>


    </div>
  );
}

export default App;
