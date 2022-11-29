import React from 'react';
import './Home.scss';
import Intro from '../component/Intro';
import Portfolio from '../component/Portfolio';
import Skills from '../component/Skills';
import Aboutme from '../component/Aboutme';

function Home() {
  return (
    <>
      <Intro />
      <Aboutme />
      <Portfolio />
      <Skills />
    </>
  );
}

export default Home;
