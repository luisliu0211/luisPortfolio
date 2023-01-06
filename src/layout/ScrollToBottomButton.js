import React from 'react';
import { useEffect, useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

function ScrollToBottomButton() {
  const [toBottom, setToBottom] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset < 2000) {
        setToBottom(true);
      } else {
        setToBottom(false);
      }
    });
  }, []);
  const scrollDown = () => {
    window.scrollTo({
      top: 3500,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {' '}
      {toBottom ? (
        <FaAngleDoubleDown
          onClick={scrollDown}
          style={{
            borderRadius: '15px',
            color: 'white',
            padding: '5px',
            fontSize: '4rem',
            position: 'fixed',
            top: '92vh',
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

export default ScrollToBottomButton;
