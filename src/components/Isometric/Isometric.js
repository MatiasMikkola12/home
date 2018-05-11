import React, { Component } from 'react';
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import './Isometric.css';

class Isometric extends Component {
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <div className="portfolio">
        <IsometricGrid
          shadow
          transform="rotateX(45deg) rotateZ(45deg)"
          stackItemsAnimation={{
            properties: function(pos) {
              return {
                translateZ: (pos + 1) * 30,
                rotateZ: getRandomInt(-4, 4),
              };
            },
            options: function(pos, itemstotal) {
              return {
                type: dynamics.bezier,
                duration: 500,
                points: [
                  { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                  { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
                ],
                delay: (itemstotal - pos - 1) * 40,
              };
            },
          }}
          style={{ height: '100%', width: '50%' }}
          >
          <Cell
            layers={[
              'https://picsum.photos/200/300/?random',
              '#FFC0CB',
              '#ff6882',
              '#ff002d',
            ]}
            />
          <Cell
            layers={[
              'https://picsum.photos/200/300/?random',
              '#FFC0CB',
              '#ff6882',
              '#ff002d',
            ]}
            />
          <Cell
            layers={[
              'https://picsum.photos/200/300/?random',
              '#FFC0CB',
              '#ff6882',
              '#ff002d',
            ]}
            />
        </IsometricGrid>
      </div>
    );
  }
}

export default Isometric;
