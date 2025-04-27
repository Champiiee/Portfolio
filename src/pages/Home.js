import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import './Home.css';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Card data
const cardItems = [
  {
    title: "My Skills",
    content: "Full-stack development, UI/UX design, animation",
    icon: "💻"
  },
  {
    title: "Experience",
    content: "5+ years building digital products",
    icon: "🚀"
  },
  {
    title: "Projects",
    content: "Check out my latest work",
    icon: "✨"
  }
];

function Home() {
  const sectionRef = useRef(null);
  const infoCardsRef = useRef([]);
  const containerRef = useRef(null);
  
  // Add ref to array
  const addToRefs = (el) => {
    if (el && !infoCardsRef.current.includes(el)) {
      infoCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".hero", { 
        duration: 1.5, 
        y: -80, 
        opacity: 0,
        ease: "power3.out"
      });
      
      tl.from(".bg-shape-1", {
        x: -200,
        y: -200,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1, 0.5)"
      }, "-=1");
      
      tl.from(".bg-shape-2", {
        x: 200,
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1, 0.5)"
      }, "-=1.5");

      infoCardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "back.out(1.2)"
        });
      });

      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      const mm = gsap.matchMedia();
      
      mm.add("(max-width: 768px)", () => {
        gsap.set(".bg-shape", { scale: 0.7 });
        gsap.set(".hero", { y: -40 });
      });

    }, containerRef);
    
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="home-container" ref={containerRef}>
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>
      
      <section className="hero-section">
        <div className="hero">
          <Hero />
        </div>
      </section>
      
      <main className="main-content">
        <div className="info-cards-grid">
          {cardItems.map((card, index) => (
            <div 
              className="info-card" 
              key={index}
              ref={addToRefs}
              aria-label={card.title}
            >
              <InfoCard {...card} />
            </div>
          ))}
        </div>
        
        <section 
          className="about-section" 
          ref={sectionRef}
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading" className="section-title">
            Creative Problem Solver
          </h2>
          <p className="section-text">
            I combine technical expertise with artistic vision to create 
            memorable digital experiences that users love.
          </p>
          <button 
            className="cta-button"
            aria-label="Explore my portfolio work"
          >
            Explore My Work
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;