import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import  Services from './components/Services';
import Navbar from './components/Navbar';

import {Switch,Route,
    
  } from "react-router-dom";

const App=()=>
{



return(
    <>

<Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/services" component={Services}/>

        </Switch>
        

        

    </>
);



}
export default App;