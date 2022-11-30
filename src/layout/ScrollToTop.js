import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  function scrollTop() {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }
  useEffect(() => {
    window.addEventListener('load', scrollTop);
  }, []);
  useEffect(() => {
    scrollTop();
  }, [pathname]);
  return null;
}
