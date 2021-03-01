import React from 'react';
import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import DetailsBeer from './components/DetailsBeer';
import Search from './components/Search'

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={Beers}/>
        <Route exact path='/randombeer' component={RandomBeer}/>
        <Route exact path='/newbeer' component={NewBeer}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/beers/:id' component={DetailsBeer}/>
      </Switch>
        
      
    </div>
  
  );
}

export default App;
