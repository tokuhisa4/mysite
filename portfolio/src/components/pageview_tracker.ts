// PageViewTracker.tsx
declare global {
  interface Window {
    dataLayer: any[];
  }
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: location.pathname,
    });
  }, [location]);

  return null;
};

export default PageViewTracker;