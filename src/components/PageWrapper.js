import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

function PageWrapper({ children }) {
  const containerRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    return () => {
      gsap.to(el, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: 'power3.inOut'
      });
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}

export default PageWrapper;
