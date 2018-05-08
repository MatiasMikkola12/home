import React, { Component } from 'react';
import './Home.css';
import { fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import TiArrowSortedDown from 'react-icons/lib/ti/arrow-sorted-down';

const styles = {
  fadeInUp: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  fadeInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },

  fadeInDownQuick: {
    animation: 'x 4s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDownQuick')
  }
}

class Home extends Component {
    render () {
        return (
          <div className="hero">
            <div className="header">
              <StyleRoot>
                <div className="test" style={styles.fadeInDown}>
                  <h1>Matias Mikkola</h1>
                </div>
              </StyleRoot>
              <StyleRoot>
                <div className="test" style={styles.fadeInUp}>
                  <h1>UI Developer</h1>
                </div>
              </StyleRoot>
            </div>
            <StyleRoot>
              <div className="down" style={styles.fadeInDownQuick}>
                <TiArrowSortedDown />
              </div>
            </StyleRoot>
          </div>
        )
    }
};

export default Home;
