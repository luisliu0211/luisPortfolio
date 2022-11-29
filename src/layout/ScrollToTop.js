import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  function scrollTop() {
    // window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 100);
  }
  useEffect(() => {
    window.addEventListener('load', scrollTop);
    // console.log('偵測載入');
  }, []);
  useEffect(() => {
    scrollTop();
  }, [pathname]);
  return null;
}
