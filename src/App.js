import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import ScrollToTop from './layout/ScrollToTop';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="*" element={<NotFound />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
