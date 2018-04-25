import React, { Component } from 'react';
import './App.css';
import { fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeInUp: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  fadeInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}

class App extends Component {
    render () {
        return (
          <div class="hero">
            <div class="header">
              <StyleRoot>
                <div className="test" style={styles.fadeInUp}>
                  <h1>Matias Mikkola</h1>
                </div>
              </StyleRoot>
              <StyleRoot>
                <div className="test" style={styles.fadeInDown}>
                  <h1>UI Developer</h1>
                </div>
              </StyleRoot>
            </div>
          </div>
        )
    }
};

export default App;
