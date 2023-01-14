import React, { useEffect } from 'react';
import './Header.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { useState, useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaAngleDoubleUp } from 'react-icons/fa';

function Header() {
  const [isOpen, setOpen] = useState(false);

  const downicon = useRef(null);
  const upicon = useRef(null);

  const moveit = (way) => {
    if (way.current.children[0].id === 'down') {
      window.scrollTo({
        top: 3500,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  const openHandle = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Offcanvas
        show={isOpen}
        onHide={handleClose}
        className="Header"
        scroll="true"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="" scroll="true" backdrop="true">
          <div className="menu">
            <div>
              <a href="#home">
                Main Page
                <hr></hr>
              </a>
              <a href="#about">
                About me <hr></hr>
              </a>
              <a href="#mywork">
                Portfolio Collection <hr></hr>
              </a>

              <a href="#myskills">
                Using Skills <hr></hr>
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="categoryBar">
        <IoIosArrowBack
          onClick={() => openHandle()}
          className={isOpen ? '' : 'nextIcon'}
        />
        <div ref={downicon}>
          <FaAngleDoubleDown
            onClick={() => {
              moveit(downicon);
            }}
            id="down"
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
        </div>

        <div ref={upicon}>
          <FaAngleDoubleUp
            onClick={() => {
              moveit(upicon);
            }}
            id="up"
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
        </div>
      </div>
    </>
  );
}

export default Header;
