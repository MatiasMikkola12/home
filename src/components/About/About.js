import React, { Component } from 'react';
import Isometric from './../Isometric/Isometric';
import Card from './../Card/Card';
import './About.css';

class About extends Component {
    render () {
        return (
          <div className="about">
            <div className="img-container">
              <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/28828567_10214090281963990_2549268603893698073_o.jpg?_nc_cat=0&oh=03a5d630f51ef0d35d55dc4548b52742&oe=5B8FA53D" />
            </div>
            <div className="about-me">
              <h1>Hello,</h1>
              <p>I'm a UI developer located in beautiful Palo Alto, CA. Currently working for <a href="https://www.idean.com/" target="_blank">idean.com</a>.  
              </p>
            </div>
          </div>
        )
    }
};

export default About;
