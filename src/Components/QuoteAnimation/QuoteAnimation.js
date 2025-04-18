import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './QuoteAnimation.css';

const QuoteAnimation = () => {
  const quoteRef = useRef(null);

  // Helper functions
  const randomNumber = (min, max) => Math.floor(Math.random() * (1 + max - min) + min);
  const rangeToPercent = (number, min, max) => (number - min) / (max - min);

  useEffect(() => {
    if (!quoteRef.current) return;

    const quote = quoteRef.current;
    const originalText = quote.textContent;
    
    // Split text into words and wrap each in a span
    const words = originalText.split(' ').map(word => {
      const span = document.createElement('span');
      span.className = 'word';
      span.style.display = 'inline-block'; // Required for 3D transforms
      span.textContent = word + ' '; // Add space back
      return span;
    });

    // Clear and rebuild the quote with word spans
    quote.innerHTML = '';
    words.forEach(word => quote.appendChild(word));
    
    const wordElements = quote.querySelectorAll('.word');
    const tl = gsap.timeline({ delay: 0.5, repeat: 10, repeatDelay: 1 });

    // Prep the quote div for 3D goodness
    gsap.set(quote, {
      transformPerspective: 600,
      perspective: 300,
      transformStyle: "preserve-3d",
      autoAlpha: 1
    });

    // Intro sequence
    wordElements.forEach((word, i) => {
      tl.from(
        word,
        1.5,
        {
          z: randomNumber(-500, 300),
          opacity: 0,
          rotationY: randomNumber(-40, 40)
        },
        Math.random() * 1.5
      );
    });

    tl.from(
      quote,
      tl.duration(),
      { rotationY: 180, transformOrigin: "50% 75% 200", ease: "power2.out" },
      0
    );

    // Randomly change z of each word, map opacity to z depth and rotate quote on y axis
    wordElements.forEach((word, i) => {
      const z = randomNumber(-50, 50);
      tl.to(
        word,
        0.5,
        { z: z, opacity: rangeToPercent(z, -50, 50) },
        "pulse"
      );
    });
    tl.to(quote, 0.5, { rotationY: 20 }, "pulse");

    // Randomly change z of each word, map opacity to z depth and rotate quote on xy axis
    wordElements.forEach((word, i) => {
      const z = randomNumber(-100, 100);
      tl.to(
        word,
        0.5,
        { z: z, opacity: rangeToPercent(z, -100, 100) },
        "pulse2"
      );
    });
    tl.to(quote, 0.5, { rotationX: -35, rotationY: 0 }, "pulse2");

    // Reset the quote to normal position
    tl.to(wordElements, 0.5, { z: 0, opacity: 1 }, "reset");
    tl.to(quote, 0.5, { rotationY: 0, rotationX: 0 }, "reset");

    // Add explode label 2 seconds after reset animation is done
    tl.add("explode", "+=2");
    // Add explode effect
    wordElements.forEach((word, i) => {
      tl.to(
        word,
        0.6,
        {
          z: randomNumber(100, 500),
          opacity: 0,
          rotation: randomNumber(360, 720),
          rotationX: randomNumber(-360, 360),
          rotationY: randomNumber(-360, 360)
        },
        "explode+=" + Math.random() * 0.2
      );
    });

    return () => {
      // Cleanup - restore original text
      quote.textContent = originalText;
    };
  }, []);

  return (
    <div className="bg-container-quote">
      <div id="quote" ref={quoteRef}>
        <span className='span2'>Deadlines</span> are <span className='span2'> looming</span>. You've got to <span className='span2'>deliver</span> something that looks amazing, packed with lots of <span className='span2'>whiz-bang</span> effects that run smoothly on various machines. No time to <span className='span2'> reinvent</span> the wheel. You need a reliable tool set that helps you live up to your reputation as a <span className='span2'>coding Rock Star</span>.
      </div>
    </div>
  );
};

export default QuoteAnimation;