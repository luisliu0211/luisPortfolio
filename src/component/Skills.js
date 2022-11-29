import React from 'react';
import './Skills.scss';
import { FiThumbsUp } from 'react-icons/fi';

function Skills() {
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
                <div className="card">
                  <div className="skill">HTML</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill"> CSS/SCSS</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill">Javascript</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill">Bootstrap</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
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
                <div className="card">
                  <div className="skill">Php</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill">Node.js</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill">React.js</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill">Next.js</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Learning
                  </div>
                </div>
                <div className="card">
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
                <div className="card">
                  <div className="skill">Mandarin</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Native
                  </div>
                </div>
                <div className="card">
                  <div className="skill">English</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill">Japanese</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill">Spanish</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Learning
                  </div>
                </div>
                <div className="card">
                  <div>{/* <FiThumbsUp className="thumbIcon" /> */}</div>
                </div>
              </div>
            </div>
            <div className="list">
              <div className="skillTitle">Database</div>
              <div className="hey">
                <div className="card">
                  <div className="skill">MySQL</div>
                  <div className="rate">
                    <FiThumbsUp className="thumbIcon" />
                    Basic
                  </div>
                </div>
                <div className="card">
                  <div className="skill"></div>
                </div>
                <div className="card">
                  <div className="skill"></div>
                </div>
                <div className="card">
                  <div className="skill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skilldetail_Mobile">
          <p>Frontend Development</p>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
          </ul>
          <p>Backend Development</p>
          <ul>
            <li>PHP</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
          <p>Language Skill</p>
          <ul>
            <li>Mandarin</li>
            <li>English</li>
            <li>Japanese</li>
            <li>Spanish</li>
          </ul>
          <p>Other Skills</p>
          <ul>
            <li>MySql</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
