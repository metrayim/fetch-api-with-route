import React from 'react';
import logo from './logo.svg';
import LandingPage from './Loadingpage';
import ProtectedRoute from './Protectpage';
import AppLayout from './app.layout';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header/NarBar';
import NotF from './NotFoud/Notfound';
import View from './Component/View'

function App() {
  return (
   
     <div className="App">
       <Header/>

      <Switch>
        <Route exact path="/login" component={LandingPage} />
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/article" component={AppLayout} />
        <Route exact path="/detail/:id" component={View}/>
        <Route path="*" component={NotF} />
      </Switch>
    </div>
  
  );
}

export default App;
