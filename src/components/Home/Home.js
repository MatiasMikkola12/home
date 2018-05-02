import React, { Component } from 'react';
import './Home.css';
import { fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeInUp: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  fadeInDown: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}

class Home extends Component {
    render () {
        return (
          <div className="hero">
            <div className="header">
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

export default Home;
