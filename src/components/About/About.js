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
              <p>I'm a Software Developer located in London, UK. I'm currently working for <a href="https://www.infinityworks.com/" target="_blank">infinityworks.com</a>.</p>
              <p>I've previously worked with front-end technologies, Javascript, Typescript, React + Redux, as well as Golang and AWS Cloud.</p>
              <p>Please don't hesitate to contact me if you feel like we should chat!</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/matias-mikkola-6a5b0a63/" target="_blank">linkedin</a></li>
                <li><a href="https://stackoverflow.com/users/4942596/matmik?tab=profile" target="_blank">stack overflow</a></li>
                <li><a href="https://github.com/MatiasMikkola12" target="_blank">github</a></li>
              </ul>
            </div>
          </div>
        )
    }
};

export default About;
