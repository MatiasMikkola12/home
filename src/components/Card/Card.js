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
          <a href={this.props.target} target="_blank">
            <div className="card">
              <img src={this.props.img} alt="img" />
              <div className="container">
                <h4><b>{this.props.title}</b></h4>
                <p>{this.props.description}</p>
              </div>
            </div>
          </a>
        )
    }
};

export default Card;
