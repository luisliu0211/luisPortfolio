import React from 'react';
import './Home.scss';
import Intro from '../component/Intro';
import Portfolio from '../component/Portfolio';
import Skills from '../component/Skills';
import Aboutme from '../component/Aboutme';
import ScrollToTop from '../layout/ScrollToTop';

function Home() {
  return (
    <>
      <div className="">
        <ScrollToTop />
        <Intro id=""></Intro>
        <Aboutme id=""></Aboutme>
        <Portfolio id=""></Portfolio>
        <Skills id=""></Skills>
      </div>
    </>
  );
}

export default Home;
