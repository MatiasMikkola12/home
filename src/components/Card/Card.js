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
          <article class="card">
              <a href="#">
                  <picture class="thumbnail">
                      <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg" alt="A banana that looks like a bird" />
                  </picture>
                  <div class="card-content">

                      <h2>Vacation Image 01</h2>
                      <p>TUX re-inventing the wheel, and move the needle. Feature creep dogpile that but diversify kpis but market-facing.</p>
                  </div>
              </a>
          </article>
        )
    }
};

export default Card;
