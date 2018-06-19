import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {

    static propTypes = {
      img: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      target: PropTypes.string,
    };

    render () {
        return (
          <div className="crop">
             <img src={this.props.img} />
          </div>
        )
    }
};

export default Card;
