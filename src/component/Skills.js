import React, { useState } from 'react';
import './Skills.scss';
import { FiThumbsUp } from 'react-icons/fi';
import { FaAngleDoubleUp } from 'react-icons/fa';

function Skills() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div className="skills" id="myskills">
      <div className="skillsList">
        <div className="title">What do i have</div>
        <div className="skilldetail">
          <div className="web">
            {' '}
            <div className="list">
              <div className="skillTitle">Frontend Development</div>
              <div className="hey">
                {' '}
                <div className="card1">
                  <div className="skill">HTML</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill"> CSS/SCSS</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">Javascript</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">Bootstrap</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">JQuery</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
              </div>
            </div>
            <div className="list">
              <div className="skillTitle">Backend Development</div>
              <div className="hey">
                {' '}
                <div className="card1">
                  <div className="skill">Php</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">Node.js</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">React.js</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">Next.js</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Learning
                  </div>
                </div>
                <div className="card1">
                  <div className="skill"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="other">
            {' '}
            <div className="list">
              <div className="skillTitle">Language Skill</div>
              <div className="hey">
                {' '}
                <div className="card1">
                  <div className="skill">Mandarin</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Native
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">English</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">Japanese</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill">Spanish</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Learning
                  </div>
                </div>
                <div className="card1">
                  <div>{/* <FiThumbsUp className="thumbIcon" /> */}</div>
                </div>
              </div>
            </div>
            <div className="list">
              <div className="skillTitle">Database</div>
              <div className="hey">
                <div className="card1">
                  <div className="skill">MySQL</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card1">
                  <div className="skill"></div>
                </div>
                <div className="card1">
                  <div className="skill"></div>
                </div>
                <div className="card1">
                  <div className="skill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skilldetail_Mobile">
          <p
            onClick={() => {
              setShow1(!show1);
            }}
          >
            Frontend Development
          </p>
          {show1 ? (
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
            </ul>
          ) : (
            ''
          )}
          <hr />
          <p
            onClick={() => {
              setShow2(!show2);
            }}
          >
            Backend Development
          </p>
          {show2 ? (
            <ul>
              <li>PHP</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
          ) : (
            ''
          )}
          <hr />
          <p
            onClick={() => {
              setShow3(!show3);
            }}
          >
            Language Skill
          </p>
          {show3 ? (
            <ul>
              <li>Mandarin</li>
              <li>English</li>
              <li>Japanese</li>
              <li>Spanish</li>
            </ul>
          ) : (
            ''
          )}
          <hr />
          <p
            onClick={() => {
              setShow4(!show4);
            }}
          >
            Other Skills
          </p>
          {show4 ? (
            <ul>
              <li>MySql</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
          ) : (
            ''
          )}

          <FaAngleDoubleUp
            className="up"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            style={{ zIndex: '6', fontSize: '2rem', marginTop: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
