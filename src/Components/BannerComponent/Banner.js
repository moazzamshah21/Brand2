import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Banner.css';

const Banner = () => {
  useEffect(() => {
    // Get all Wrap elements
    const wraps = document.querySelectorAll('.Wrap');
    const initialPositions = [];
    const initialScales = [];

    wraps.forEach((wrap, index) => {
      const rect = wrap.getBoundingClientRect();
      initialPositions[index] = { x: rect.left, y: rect.top };

      const computedStyle = window.getComputedStyle(wrap);
      const transform = computedStyle.transform;

      if (transform && transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        initialScales[index] = matrix.a;
      } else {
        initialScales[index] = 1;
      }
    });

    const handleMouseMove = (event) => {
      wraps.forEach((wrap, index) => {
        const rect = wrap.getBoundingClientRect();
        const distanceX = event.clientX - (rect.left + rect.width / 2);
        const distanceY = event.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 200) {
          gsap.to(wrap, {
            x: distanceX * 0.2,
            y: distanceY * 0.2,
            duration: 0.3,
          });
        } else {
          gsap.to(wrap, {
            x: 0,
            y: 0,
            duration: 0.3,
          });
        }

        if (distance < 800) {
          const scaleFactor = initialScales[index] + (0.4 * (1 - distance / 600));
          gsap.to(wrap, {
            scale: scaleFactor,
            duration: 0.3,
          });
        } else {
          gsap.to(wrap, {
            scale: initialScales[index],
            duration: 0.3,
          });
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="Banner">
      <div id="Wrap" className="Wrap wrap1">
      </div>
      <div className="Wrap wrap2">
      </div>
      <div className="Wrap wrap3">
      </div>
      <div className="Wrap wrap4">
      </div>
      <div className="Wrap wrap5">
      </div>
      <div className="Wrap wrap6">
      </div>
      <div className="Wrap wrap7">
      </div>
      <div className="Wrap wrap8">
      </div>
    </section>
  );
};

export default Banner;
