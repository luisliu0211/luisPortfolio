import React from 'react';
import './Header.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import ScrollToTopButton from './ScrollToTopButton';
import ScrollToBottomButton from './ScrollToBottomButton';
function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isDrop1, setDrop1] = useState(false);
  const [isDrop2, setDrop2] = useState(false);
  const openHandle = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
      setDrop1(true);
      setDrop2(true);
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
        <ScrollToTopButton className="up" />
        <ScrollToBottomButton className="down" />
      </div>
    </>
  );
}

export default Header;
