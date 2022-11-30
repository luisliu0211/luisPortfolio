import React from 'react';
import './Portfolio.scss';
import { FiArrowRight } from 'react-icons/fi';
import project_Apple from '../../src/images/applemanorProject.png';
import project_MyPortfolio from '../../src/images/portfolioWebsite.png';
import project_OhDogCat from '../../src/images/ohdogcatProject.png';
import project_OhDogCatBE from '../../src/images/社群後台管理.png';

function Portfolio() {
  return (
    <div className="portfolio" id="mywork">
      {' '}
      <div className="portfolioList">
        <div className="title">my portfolio colloection</div>
        <div className="catagoryList">
          <li>ALL</li>
          <li>Layout</li>
          <li>Project</li>
          <li>UI/UX design</li>
          <li>Function</li>
        </div>

        <div className="cardList">
          <div className="card">
            <div className="screenshot">
              <img alt="" src={project_Apple}></img>
            </div>
            <div className="description">
              <div className="descriptionTitle">
                蘋果莊園Apple Manor商業靜態網站
              </div>
              <div className="statusTag">
                <div className="tag">上線專案</div>
                <div className="tag">react.js +Github Pages</div>
              </div>
              <div className="link">
                <div
                  className="test"
                  onClick={() => {
                    window.location.href =
                      'https://applemanorofficial.github.io/applemanor/';
                  }}
                >
                  <div className="btn">Live Demo</div>
                  <FiArrowRight className="linkIcon" />
                </div>
                <div
                  className="test"
                  onClick={() => {
                    window.location.href =
                      'https://github.com/AppleManorOfficial/applemanor';
                  }}
                >
                  <div className="btn">Code</div>
                  <FiArrowRight className="linkIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="screenshot">
              <img alt="" src={project_MyPortfolio}></img>
            </div>
            <div className="description">
              <div className="descriptionTitle">個人作品集網站</div>
              <div className="statusTag">
                <div className="tag">更新中</div>
                <div className="tag">react.js +Github Pages</div>
              </div>
              <div className="link">
                <div
                  className="test"
                  onClick={() => {
                    window.location.href =
                      'https://luisliu0211.github.io/luisportfolio/';
                  }}
                >
                  <div className="btn">Live Demo</div>
                  <FiArrowRight className="linkIcon" />
                </div>
                <div
                  className="test"
                  onClick={() => {
                    window.location.href =
                      'https://github.com/luisliu0211/luisportfolio';
                  }}
                >
                  <div className="btn">Code</div>
                  <FiArrowRight className="linkIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="screenshot">
              <img alt="" src={project_OhDogCat}></img>
            </div>
            <div className="description">
              <div className="descriptionTitle">
                資策會小組專題-OhDogCat寵物平台
              </div>
              <div className="statusTag">
                <div className="tag">練習專案</div>
                <div className="tag">react.js</div>
                <div className="tag">html</div>
              </div>
              <div className="link">
                <div className="test">
                  <div className="btn">Picture Demo</div>
                  <FiArrowRight className="linkIcon" />
                </div>
                <div
                  className="test"
                  onClick={() => {
                    window.location.href =
                      'https://github.com/RainOuO/Team3_OhDogCat';
                  }}
                >
                  <div className="btn">Code</div>
                  <FiArrowRight className="linkIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="screenshot">
              <img alt="" src={project_OhDogCatBE}></img>
            </div>
            <div className="description">
              <div className="descriptionTitle">
                資策會小組專題-OhDogCat後台訂單系統
              </div>
              <div className="statusTag">
                <div className="tag">練習專案</div>
                <div className="tag">PHP</div>
              </div>
              <div className="link">
                <div className="test">
                  <div className="btn">Picture Demo</div>
                  <FiArrowRight className="linkIcon" />
                </div>
                <div
                  className="test"
                  onClick={() => {
                    alert('尚未建置完成');
                  }}
                >
                  <div className="btn">Code</div>
                  <FiArrowRight className="linkIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
