import React from 'react';
import './Header.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { HiChevronRight } from 'react-icons/hi';
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
  const dropDownHandle1 = () => {
    if (isDrop1 === false) {
      setDrop1(true);
    } else {
      setDrop1(false);
    }
  };
  const dropDownHandle2 = () => {
    if (isDrop2 === false) {
      setDrop2(true);
    } else {
      setDrop2(false);
    }
  };

  return (
    <>
      <Offcanvas show={isOpen} className="Header" scroll="true" backdrop="true">
        <Offcanvas.Body className="menu">
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
                Portfolio Collection
                <HiChevronRight
                  className="moreIcon"
                  onClick={() => dropDownHandle1()}
                />
                <div
                  className="subcat"
                  style={{ display: `${isDrop1 ? 'none' : 'block'}` }}
                >
                  <div>All</div>
                  <div>layout</div>
                  <div>project</div>
                  <div>UI/UX design</div>
                  <div>Function</div>
                </div>
                <hr></hr>
              </a>

              <a href="#myskills">
                Using Skills{' '}
                <HiChevronRight
                  className="moreIcon"
                  onClick={() => dropDownHandle2()}
                />
                <div
                  className="subcat"
                  style={{ display: `${isDrop2 ? 'none' : 'block'}` }}
                >
                  <div>HTML</div>
                  <div>CSS/SCSS</div>
                  <div>Javascript</div>
                  <div>PHP</div>
                  <div>REACT</div>
                  <div>JQuery</div>
                  <div>Bootstrap</div>
                  <div>MySQL</div>
                </div>
                <hr></hr>
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
      x
    </>
  );
}

export default Header;
