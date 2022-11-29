import React from 'react';
import './Aboutme.scss';
import Person from '../images/personalPhoto.jpg';

function Aboutme() {
  return (
    <>
      <div className="aboutme" id="about">
        <div className="aboutmeList">
          <div className="title">About me</div>
          <div className="content">
            {' '}
            <div className="photo">
              <img alt="" src={Person}></img>
            </div>
            <div className="description">
              <p>
                Hi I'm Luis from Taiwan, currently learning Front-End
                developement.
              </p>
              <p>
                This is my portfolio website, recording all my work or practice
                material.
              </p>
              <p>I know it's not easy to do, but will try my best.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
