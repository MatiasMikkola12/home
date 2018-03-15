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
              <h1>Matias Mikkola</h1>
              <div className="main">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
            </div>
        )
    }
};

export default App;
