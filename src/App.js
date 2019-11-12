import React from 'react';
import LandingPage from './Component/Authenication/Loadingpage';
import ProtectedRoute from './Component/Authenication/Protectpage';
import AppLayout from './Component/Authenication/app.layout';
import {Route, Switch } from "react-router-dom";
import Header from './Component/Header/NarBar';
import NotF from './Component/NotFoud/Notfound';
import View from './Component/CompoentData/View';
import AboutUs from './Component/AboutUs/aboutUs';
import Contact from './Component/Contact/Contact'


function App() {
  return (
   
     <div className="App">
       <Header/>

      <Switch>
        <Route exact path="/login" component={LandingPage} />
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/article" component={AppLayout} />
        <Route exact path="/detail/:id" component={View}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="*" component={NotF} />
      </Switch>
    
    </div>
  
  );
}

export default App;
