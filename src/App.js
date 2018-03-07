import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './assets/ball.jpg'
import Introduction from './components/Introduction/Introduction';
import Isometric from './components/Isometric/Isometric'


class App extends Component {
    render () {
        return (
            <div className="home-hero">
              <Introduction />
              <img className="ball" src={Ball} />
              <div>
                <Isometric />
              </div>
            </div>
        )
    }
};

export default App;
