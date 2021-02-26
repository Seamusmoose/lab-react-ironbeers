import React from 'react';
import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import RandomBeer from './components/Navbar';
import NewBeer from './components/NewBeer';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={Beers}/>
        <Route exact path='/randomBeer' component={RandomBeer}/>
        <Route exact path='/newBeer' component={NewBeer}/>
      </Switch>
        
      
    </div>
  
  );
}

export default App;
