import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import DesktopApp from './desktop/DesktopApp';
import MobileApp from './mobile/MobileApp';

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // This will initially render false during SSR or first paint if not careful, 
  // but for a simple Vite SPA it's fine.
  return (
    <Router>
      {isDesktop ? <DesktopApp /> : <MobileApp />}
    </Router>
  );
}

export default App;
