import { useEffect } from 'react';

const ScrollBg = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 1000;
      const percent = Math.min(scrollY / maxScroll, 1);

      // 明度 or 透明度だけを変える値
      const tint = (0.35 * percent).toFixed(3);

      // CSS変数に反映（index.cssの #root::after で使う）
      document.documentElement.style.setProperty('--scroll-tint', tint);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.setProperty('--scroll-tint', '0');
    };
  }, []);

  return null;
};

export default ScrollBg;
