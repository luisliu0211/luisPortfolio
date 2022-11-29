import React from 'react';
import { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [toTop, setToTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 1000) {
        setToTop(true);
      } else {
        setToTop(false);
      }
      // console.log(window.pageYOffset);
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {' '}
      {toTop ? (
        <FaAngleDoubleUp
          onClick={scrollUp}
          style={{
            borderRadius: '15px',
            color: 'white',
            padding: '5px',
            fontSize: '4rem',
            position: 'fixed',
            top: '0vh',
            left: '10px',
            zIndex: '5',
          }}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default ScrollToTopButton;
