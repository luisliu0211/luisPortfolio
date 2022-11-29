import React from 'react';
import './Footer.scss';
import { BsInstagram } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
function footer() {
  return (
    <>
      <footer className="footer">
        <div className="contactLogo">
          <BsInstagram
            className="igIcon"
            onClick={() => {
              window.location.href = 'https://zh-tw.facebook.com/AppleManorTW/';
            }}
          />

          <MdMailOutline
            className="mailIcon"
            onClick={() => {
              window.location.href = 'https://zh-tw.facebook.com/AppleManorTW/';
            }}
          />
          <BsGithub
            className="githubIcon"
            onClick={() => {
              window.location.href = 'https://zh-tw.facebook.com/AppleManorTW/';
            }}
          />
        </div>
        <div className="copyright">© 2022 All rights reserved.</div>
      </footer>
    </>
  );
}

export default footer;
