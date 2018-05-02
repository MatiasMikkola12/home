import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';

class App extends Component {

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
};

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
};

handleScroll() {
  window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  });
};

// glitchy AFFFFF

    render () {
        return (
          <div className="App">
            <Home />
            <About />
          </div>
        )
    }
};

export default App;
