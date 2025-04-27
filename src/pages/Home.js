import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import './Home.css';

// Import MUI icons
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

gsap.registerPlugin(ScrollTrigger);

const cardItems = [
  {
    title: "Developer",
    content: "Knowledgeable in HTML, React JS, and CSS",
    icon: <CodeIcon style={{ fontSize: '3rem', color: '#007BFF' }} />, // MUI Icon
  },
  {
    title: "Who am I?",
    content: "I am a web developer that loves to explore new things",
    icon: <PersonIcon style={{ fontSize: '3rem', color: '#007BFF' }} />, // MUI Icon
  },
  {
    title: "Tech Adventurer",
    content: "Always curious about technology and coding.",
    icon: <LaptopMacIcon style={{ fontSize: '3rem', color: '#007BFF' }} />, // MUI Icon
  },
];

const InfoCard = ({ title, content, icon }) => (
  <div className="info-card-content">
    <div className="info-card-icon">{icon}</div>
    <h3 className="info-card-title">{title}</h3>
    <p className="info-card-text">{content}</p>
  </div>
);

function Home() {
  const sectionRef = useRef(null);
  const infoCardsRef = useRef([]);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const addToRefs = (el) => {
    if (el && !infoCardsRef.current.includes(el)) {
      infoCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero", { 
        duration: 1.2, 
        y: 60, 
        opacity: 0,
        ease: "power3.out"
      })
      .from([".bg-shape-1", ".bg-shape-2"], {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2
      }, "-=0.8");

      gsap.from(infoCardsRef.current, {
        scrollTrigger: {
          trigger: ".info-cards-grid",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
      });

      const mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {
        gsap.set(".bg-shape", { scale: 0.6 });
        gsap.set(".hero", { y: -30 });
      });

    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleRedirect = () => {
    navigate('/about');
  };

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
            onClick={handleRedirect}
          >
            Want to know about me?
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
