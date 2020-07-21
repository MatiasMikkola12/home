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
            <div className="work-section">
              <h1 className="work-section-title">
                Work
              </h1>
              <section className="card-wrapper">
                <Card
                  img="https://pngimg.com/uploads/ibm/ibm_PNG19660.png"
                  />
                <Card
                  img="https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
                  />
              </section>
            </div>
          </div>
        )
    }
};

export default App;
