import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import Login from "./container/Login";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>


    </div>
  );
}

export default App;
