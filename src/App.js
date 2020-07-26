import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import Contact from './components/Contact'
import LaunchIndex from './components/LaunchIndex'

import './App.css';

function App() {
  return (
  
    <BrowserRouter>
    <nav>
   <li> <Link className="anchor" to="Home" >Home</Link></li>
   <li> <Link className="anchor" to="About" >About</Link></li>
    <li><Link className="anchor" to="Store" >Store</Link></li>
    <li><Link className="anchor" to="Contact" >Contac Us</Link></li>
    </nav>
        
    <Route exact path="/home" component={Home}>Home</Route>
    <Route path="/about"component={About}>About</Route>
    <Route path="store"component={Store}>Store</Route>
      <Route path="LaunchIndex" component={LaunchIndex}></Route>
    <Route path="/contact"component={Contact}>Contact</Route>

    </BrowserRouter>
    
    
    
  );
}

export default App;
