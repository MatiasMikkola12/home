import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Computer from './assets/unsplash.jpg'
import Introduction from './components/Introduction/Introduction';
import Isometric from './components/Isometric/Isometric'


class App extends Component {
    render () {
        return (
            <div className="home-hero">
              <div className="sideimg" />
              <div className="main">
                <h1>Matias Mikkola</h1>
              </div>
            </div>
        )
    }
};

export default App;
