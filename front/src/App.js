import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Main from "./container/Main";
import Login from "./container/Login";
import MyRoom from "./container/MyRoom";
import MakeRoom from "./container/MakeRoom";
import InRoom from "./container/InRoom";
import MyRoomProvider from './provider/MyRoomProvider';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CookiesProvider>
          <Route exact path="/" component={Main} />
          <MyRoomProvider>
            <Route exact path="/login" component={Login} />
            <Route exact path="/myroom" component={MyRoom} />
          </MyRoomProvider>
          <Route exact path="/makeroom" component={MakeRoom} />
          <Route exact path="/inroom" component={InRoom} />
        </CookiesProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
