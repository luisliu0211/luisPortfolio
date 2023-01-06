import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import ScrollToTop from './layout/ScrollToTop';
// import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow from './component/SlideShow';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="*" element={<NotFound />}></Route> */}
      </Routes>
      <SlideShow />
      <Footer />
    </div>
  );
}

export default App;
