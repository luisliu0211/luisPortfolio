import React from 'react';
import logo from '../../src/images/websitelogo.png';
import './Intro.scss';
import { FaAngleDoubleDown } from 'react-icons/fa';
import 'animate.css';

function Intro() {
  return (
    <div className="intro" id="home">
      <div className="self">
        <div className="title">my portfolio</div>
        <div className="cover">
          <img alt="" src={logo} width="300"></img>
        </div>
        <h4>
          {' '}
          Hi! This is Luis from Taiwan.
          <br></br>I'm a newbie in programming but willing to explore more about
          front-end development. <br></br>Feel free to chat or discuss more ～
        </h4>
        <div className="scrollDown animate__animated animate__shakeY">
          <p>scroll down to read more!</p>
          <FaAngleDoubleDown />
        </div>
      </div>
    </div>
  );
}

export default Intro;
