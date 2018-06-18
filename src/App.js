import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Card from './components/Card/Card';

class App extends Component {

    render () {
        return (
          <div className="App">
            <Home />
            <About />
            <section className="card-wrapper">
              <Card />
              <Card />
            </section>
          </div>
        )
    }
};

export default App;
