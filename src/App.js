import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './assets/ball.jpg'
import Introduction from './components/Introduction/Introduction';


class App extends Component {
    render () {
        return (
            <div className="home-hero">
              <Introduction />
              <img src={Ball} />
              <div>
                new section
              </div>
            </div>
        )
    }
};

export default App;
