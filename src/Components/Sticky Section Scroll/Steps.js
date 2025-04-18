import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cardimg from "../../Assets/Images/hero_circle_1.webp";
import Lenis from "@studio-freight/lenis";
import "./Steps.css";

gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
  const sectionRef = useRef(null);
  const lenisRef = useRef(null);
  const lastScrollY = useRef(0); // Added to track last scroll position
  const counterContainerRef = useRef(null);
  const activeIndexRef = useRef(0);


  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis();
    
    lenisRef.current.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const stickySection = sectionRef.current;
    const stickyHeight = window.innerHeight * 2;
    const card = document.querySelectorAll(".cards");
    const countContainer = document.querySelector(".counter-container");
    const totalCards = card.length;

    // Improved scroll trigger with better progress handling
    const trigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        positionCards(self.progress);
        
        // Calculate active index with threshold
        const rawIndex = self.progress * totalCards;
        const newIndex = Math.min(
          totalCards - 1, 
          Math.max(0, Math.floor(rawIndex + 10)) // Add threshold of 0.3
        );

        // Only update if index changed
        if (newIndex !== activeIndexRef.current) {
          activeIndexRef.current = newIndex;
          updateCounter(newIndex);
        }
      }      
    });

    // Smoother counter update
    const updateCounter = (index) => {
      gsap.to(counterContainerRef.current, {
        y: -index * 150,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
      });
    };

    const getRadius = () => {
        return window.innerWidth <900 ? window.innerWidth * 7.5 : window.innerWidth * 2.5;
    };

    const arcAngle = Math.PI / 2;
    const startAngle = Math.PI / 2.5 - arcAngle / 2.5;

    function positionCards(progress=0) {
        const radius = getRadius();
        const totalTravel = 1 + totalCards / 7;
        const adjustedProgress = (progress * totalTravel-1) * .58;

        card.forEach((card, i)=> {
            const normalizedProgress = (totalCards - 1 - i) /
            totalCards;
            const cardprogress = normalizedProgress + adjustedProgress;
            const angle = startAngle + arcAngle * cardprogress;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const rotation = (angle - Math.PI / 2) * (190 / Math.PI);

            gsap.set(card, {
                x: x,
                y: -y + radius,
                rotation: -rotation,
                transformOrigin: "center center",
            });
        });
    }

    positionCards(0);

    let currentCardIndex = 0;

    const options = {
      root: null,
      rootMargin: "0% 0%",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lastScrollY.current = window.scrollY;

          let cardIndex = Array.from(card).indexOf(entry.target);
          currentCardIndex = cardIndex;

          const targetY = 150 - currentCardIndex * 150;

          gsap.to(countContainer, {
            y: targetY,
            duration: .5,
            ease: "power1.out",
            overwrite: true,
          });
        }
      });
    }, options);

    card.forEach((card) => {
      observer.observe(card);
    });

    const handleResize = () => positionCards(0);
    window.addEventListener("resize", handleResize);

    return () => {
      trigger.kill();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="steps" ref={sectionRef}>
      <div className="steps-counter">
        <div className="counter-title">
          <h1>Steps</h1>
        </div>
        <div className="count">
          <div className="counter-container">
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>5</h1>
          </div>
        </div>
      </div>

      {[...Array(5)].map((_, index) => (
        <div className="cards" key={index}>
          <div className="card">
            <div className="card-img">
              <img src={cardimg} alt={`Step ${index + 1}`} />
            </div>
            <div className="card-content">
              <p>Lorem Ipsum is a dummy text</p>
            </div>
          </div>
        </div>
      ))}

      {/* Empty cards for padding/spacing */}
      <div className="cards empty"></div>
      <div className="cards empty"></div>
    </section>
  );
};

export default Steps;