import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Main from "./container/Main";
import Login from "./container/Login";
import MyRoom from "./container/MyRoom";
import MakeRoom from "./container/MakeRoom";
import InRoom from "./container/InRoom";
import UserProvider from './provider/UserProvider';
import FileBox from "./container/FileBox";
import NoticeBox from "./container/NoticeBox";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CookiesProvider>

          <UserProvider>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/myroom" component={MyRoom} />
            <Route exact path="/makeroom" component={MakeRoom} />
            <Route exact path="/inroom" component={InRoom} />
            <Route exact path="/filebox" component={FileBox} />
            <Route exact path="/noticebox" component={NoticeBox} />
          </UserProvider>

        </CookiesProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
