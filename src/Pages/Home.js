import React, { useRef, useEffect } from 'react';
import Banner from '../Components/BannerComponent/Banner';
import './Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Steps from "../Components/Sticky Section Scroll/Steps";
import QuoteAnimation from '../Components/QuoteAnimation/QuoteAnimation';

const Home = () => {
    const HeroHeading = useRef(null);
    const BannerWrap = useRef(null);
    const HeroParagraph = useRef(null);

    useEffect(() => {
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            BannerWrap.current,
            { y: 0, opacity: 1 }, // Initial state
            {
                y: -300,
                duration: 2,
                scrollTrigger: {
                    trigger: BannerWrap.current, // Trigger the animation when this element is in view
                    start: 'top -20%', // Start the animation when the top of the element reaches 80% of the viewport height
                    end: 'bottom 0%', // End the animation when the top of the element reaches 30% of the viewport height
                    scrub: 5, // This will link the animation to scroll position
                }
            }
        );

        // Scroll-triggered animation
        gsap.fromTo(
            HeroHeading.current,
            { y: 0, opacity: 1 }, // Initial state
            {
                y: -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: HeroHeading.current, // Trigger the animation when this element is in view
                    start: 'top 0%', // Start the animation when the top of the element reaches 80% of the viewport height
                    end: 'bottom 0%', // End the animation when the top of the element reaches 30% of the viewport height
                    scrub: 5, // Makes the animation linked to the scroll position
                    once: false // The animation happens only once when the element first enters the viewport
                }
            }
        );

        gsap.fromTo(
            HeroParagraph.current,
            { y: -50, opacity: 1 }, // Initial state
            {
                y: -180,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: HeroParagraph.current, // Trigger the animation when this element is in view
                    start: 'top 17%', // Start the animation when the top of the element reaches 80% of the viewport height
                    end: 'bottom 0%', // End the animation when the top of the element reaches 30% of the viewport height
                    scrub: 5, // Makes the animation linked to the scroll position
                    once: false // The animation happens only once when the element first enters the viewport
                }
            }
        )

        //2nd section//

        //1st containter//
        gsap.fromTo(
            '.SplitClass',
            {
              rotationX: 0, // Start with no rotation
              opacity: 1,   // Start with invisible text
            },
            {
              rotationX: 90, // Rotate 360 degrees on Y-axis
              opacity: 0,     // Fade out text as it rotates
              stagger: 0.1,   // Stagger the animation of each letter
              duration: 1,    // Set the duration of each animation
              ease: 'none',
              scrollTrigger: {
                trigger: '.text-3d-container', // Trigger the animation when this element comes into view
                start: 'top 10%', // Start the animation when the top of the section reaches 80% of the viewport height
                end: 'bottom -10%', // End the animation when the bottom of the section reaches 20% of the viewport height
                scrub: 1, // Scrub the animation to the scroll position
              },
            }
          );

        gsap.fromTo(
            '.numbering',
            {
                rotationX: 0, // Start with no rotation
                opacity: 1,   // Start with invisible text
              },
              {
                rotationX: 90, // Rotate 360 degrees on Y-axis
                opacity: 0,     // Fade out text as it rotates
                duration: 1,    // Set the duration of each animation
                scrollTrigger: {
                  trigger: '.second-section-content-1', // Trigger the animation when this element comes into view
                  start: 'top 20%', // Start the animation when the top of the section reaches 80% of the viewport height
                  end: 'bottom -20%', // End the animation when the bottom of the section reaches 20% of the viewport height
                  scrub: 1, // Scrub the animation to the scroll position
                },
              }
        );

        gsap.fromTo(
          '.description',
          {
            opacity: 1, // Start with no opacity
          },
          {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: '.second-section-content-1', // Trigger the animation when this element comes into view
              start: 'top 0%', // Start the animation when the top of the section reaches 80% of the viewport height
              end: 'bottom 30%', // End the animation when the bottom of the section reaches 20% of the viewport height
              scrub: 1, // Scrub the animation to the scroll position
            }
          }
        );

        //2nd con//
        gsap.timeline({
            scrollTrigger: {
              trigger: '.text-3d-container-2',
              start: 'top -30%',
              end: 'bottom -130%',
              scrub: 1,
            }
          })
          .fromTo('.SplitClass-2',
            {
              rotationX: -90,
              opacity: 0,
            },
            {
              rotationX: 0,
              transformOrigin: 'bottom',
              opacity: 1,
              duration: 1,
              ease: 'none',
              stagger: 0.1,
            }
          )
          .to('.SplitClass-2',
            {
              rotationX: 90,
              opacity: 0,
              duration: 1,
              ease: 'none',
              stagger: 0.1,
              transformOrigin: 'top',
            }
          );

          gsap.timeline({
            scrollTrigger: {
              trigger: '.second-section-content-2',
              start: 'top -40%',
              end: 'bottom 50%',
              scrub: 1,
            }
          })
          .fromTo('.numbering-2',
            {
              rotationX: -90,
              opacity: 0,
              transformOrigin: 'bottom',
            },
            {
              rotationX: 0,
              opacity: 1,
              duration: 0.1,
              ease: 'none',
            }
          )
          .to('.numbering-2',
            {
              rotationX: 90,
              opacity: 0,
              duration: 0.5,
              ease: 'none',
              transformOrigin: 'top',   
            }
          );

          gsap.timeline({
            scrollTrigger: {
              trigger: '.second-section-content-2',
              start: 'top -50%',
              end: 'bottom 0%',
              scrub: 1,
            }
          })
          .fromTo('.description-2',
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: .5,
              ease: 'none',
            }
          )
          .to('.description-2',
            {
              opacity: 0,
              duration: 0.5,
            }
          );

          //3nd con//
        gsap.timeline({
            scrollTrigger: {
              trigger: '.text-3d-container-3',
              start: 'top -30%',
              end: 'bottom -70%',
              scrub: 1,
            }
          })
          .fromTo('.SplitClass-3',
            {
              rotationX: -90,
              opacity: 0,
            },
            {
              rotationX: 0,
              transformOrigin: 'bottom',
              opacity: 1,
              duration: 1,
              ease: 'none',
              stagger: 0.1,
            }
          );

          gsap.timeline({
            scrollTrigger: {
              trigger: '.second-section-content-3',
              start: 'top -30%',
              end: 'bottom -50%',
              scrub: 1,
            }
          })
          .fromTo('.numbering-3',
            {
              rotationX: -90,
              opacity: 0,
              transformOrigin: 'bottom',
            },
            {
              rotationX: 0,
              opacity: 1,
              duration: 0.5,
              ease: 'none',
            }
          );

          gsap.timeline({
            scrollTrigger: {
              trigger: '.second-section-content-3',
              start: 'top -50%',
              end: 'bottom -70%',
              scrub: 1,
            }
          })
          .fromTo('.description-3',
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1,
              ease: 'none',
            }
          );

          gsap.fromTo(
            'body',
            {
              backgroundColor: 'white',
              color: 'black',
            },
            {
              backgroundColor: 'black',
              color: 'white',
              duration: 1,
              scrub: 1,
              scrollTrigger: {
                trigger: '.second-section-content-3',
                start: 'top 0%',
                end: 'bottom -30%',
                scrub: 1,
              }
            }
          );
          //2nd section//
          
    }, []);

    return (
        <>
            <section className='Hero'>
                <div className='BannerWrap' ref={BannerWrap}>
                <Banner />
                </div>
                <div className='HeroContent'>
                    <h1 ref={HeroHeading} className='HeroHeading'>Build Your Brand<br/> With Us</h1>
                    <p ref={HeroParagraph} className='HeroParagraph'>Elevate Your Brand With Us</p>
                </div>
            </section>
            <section className='second-section'>
                <div className='second-section-content-1'>
                    <div className='title'> 
                        <h5 className='numbering'>1</h5>
                        <h5>&nbsp; /&nbsp;3 The Ultimate Mobile Wallet Experience</h5>
                    </div>
                    
                    <div className="text-3d-container">
                        <h2 className="split-text">
                            <div className="SplitClass">S</div>
                            <div className="SplitClass">o</div>
                            <div className="SplitClass">l</div>
                            <div className="SplitClass">u</div>
                            <div className="SplitClass">t</div>
                            <div className="SplitClass">i</div>
                            <div className="SplitClass">o</div>
                            <div className="SplitClass">n</div>
                            <div className="SplitClass">s</div>
                            <div className="SplitClass">&nbsp;</div>
                            <div className="SplitClass">F</div>
                            <div className="SplitClass">o</div>
                            <div className="SplitClass">r</div>
                        </h2>
                        <h2 className="split-text">
                            <div className="SplitClass">E</div>
                            <div className="SplitClass">x</div>
                            <div className="SplitClass">p</div>
                            <div className="SplitClass">a</div>
                            <div className="SplitClass">t</div>
                            <div className="SplitClass">r</div>
                            <div className="SplitClass">i</div>
                            <div className="SplitClass">a</div>
                            <div className="SplitClass">t</div>
                            <div className="SplitClass">e</div>
                            <div className="SplitClass">s</div>
                        </h2>
                    </div>
                    <div className='description'>
                    <h4 className='hero-subheading'>Home has never felt this close!</h4>
                    <p className='hero-paragraph'> The safest and most secure way to send money to
                        your loved ones back home and support your
                        family with Tiqmo.</p>
                        </div>
                </div>

                <div className='second-section-content-2'>
                    <div className='title-2'> 
                        <h5 className='numbering-2'>2</h5>
                        <h5></h5>
                    </div>
                    
                    <div className="text-3d-container-2">
                        <h2 className="split-text">
                            <div className="SplitClass-2">S</div>
                            <div className="SplitClass-2">o</div>
                            <div className="SplitClass-2">l</div>
                            <div className="SplitClass-2">u</div>
                            <div className="SplitClass-2">t</div>
                            <div className="SplitClass-2">i</div>
                            <div className="SplitClass-2">o</div>
                            <div className="SplitClass-2">n</div>
                            <div className="SplitClass-2">s</div>
                            <div className="SplitClass-2">&nbsp;</div>
                            <div className="SplitClass-2">F</div>
                            <div className="SplitClass-2">o</div>
                            <div className="SplitClass-2">r</div>
                        </h2>
                        <h2 className="split-text">
                            <div className="SplitClass-2">E</div>
                            <div className="SplitClass-2">x</div>
                            <div className="SplitClass-2">p</div>
                            <div className="SplitClass-2">a</div>
                            <div className="SplitClass-2">t</div>
                            <div className="SplitClass-2">r</div>
                            <div className="SplitClass-2">i</div>
                            <div className="SplitClass-2">a</div>
                            <div className="SplitClass-2">t</div>
                            <div className="SplitClass-2">e</div>
                            <div className="SplitClass-2">s</div>
                        </h2>
                    </div>
                    <div className='description-2'>
                    <h4 className='hero-subheading'>Home has never felt this close!</h4>
                    <p className='hero-paragraph'> The safest and most secure way to send money to
                        your loved ones back home and support your
                        family with Tiqmo.</p>
                        </div>
                </div>

                <div className='second-section-content-3'>
                    <div className='title-3'> 
                        <h5 className='numbering-3'>3</h5>
                        <h5></h5>
                    </div>      
                    <div className="text-3d-container-3">
                        <h2 className="split-text">
                            <div className="SplitClass-3">S</div>
                            <div className="SplitClass-3">o</div>
                            <div className="SplitClass-3">l</div>
                            <div className="SplitClass-3">u</div>
                            <div className="SplitClass-3">t</div>
                            <div className="SplitClass-3">i</div>
                            <div className="SplitClass-3">o</div>
                            <div className="SplitClass-3">n</div>
                            <div className="SplitClass-3">s</div>
                            <div className="SplitClass-3">&nbsp;</div>
                            <div className="SplitClass-3">F</div>
                            <div className="SplitClass-3">o</div>
                            <div className="SplitClass-3">r</div>
                        </h2>
                        <h2 className="split-text">
                            <div className="SplitClass-3">E</div>
                            <div className="SplitClass-3">x</div>
                            <div className="SplitClass-3">p</div>
                            <div className="SplitClass-3">a</div>
                            <div className="SplitClass-3">t</div>
                            <div className="SplitClass-3">r</div>
                            <div className="SplitClass-3">i</div>
                            <div className="SplitClass-3">a</div>
                            <div className="SplitClass-3">t</div>
                            <div className="SplitClass-3">e</div>
                            <div className="SplitClass-3">s</div>
                        </h2>
                    </div>
                    <div className='description-3'>
                    <h4 className='hero-subheading'>Home has never felt this close!</h4>
                    <p className='hero-paragraph'> The safest and most secure way to send money to
                        your loved ones back home and support your
                        family with Tiqmo. The safest and most secure way to send money to
                        your loved ones back home and support your
                        family with Tiqmo. The safest and most secure way to send money to
                        your loved ones back home and support your
                        family with Tiqmo. The safest and most secure way to send money to
                        your loved ones back home and support your
                        family with Tiqmo. The safest and most secure way to send money to
                        your loved ones back home and support your
                        family with Tiqmo.</p>
                        </div>
                </div>
            </section>

            <Steps />

            <section className='third-section'>
                <div className='third-section-content'>
                    <h1>Get Started</h1>
                    <p>Get in touch with us and start your journey today!</p>
                    <button className='download-btn'>GET IN TOUCH</button>
                </div>
                <QuoteAnimation/>

            </section>

        </>
    );
};

export default Home;
