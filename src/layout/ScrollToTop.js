import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // 維持重整後返回頁面最上方
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
