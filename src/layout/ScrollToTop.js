import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.addEventListener('load', scrollTop);
    console.log('in');
  }, []);
  useEffect(() => {
    scrollTop();
  }, [pathname]);
  return null;
}
